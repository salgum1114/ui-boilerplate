'use strict';

import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import asyncComponent from '../components/AsyncComponent';
import About from '../components/About';
import Dashboard from '../components/Dashboard';
import NoMatch from '../components/NoMatch';

import Home from './Home';
import Counter from './Counter';
import Login from './Login';
import Register from './Register';

import * as actions from '../actions/authentication';

// const About = asyncComponent(() => import('../components/About').then(module => module.default), {name: 'About'});
// const Dashboard = asyncComponent(() => import('../components/Dashboard').then(module => module.default), {name: 'Dashboard'});
// const NoMatch = asyncComponent(() => import('../components/NoMatch').then(module => module.default), {name: 'NoMatch'});

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // get cookie by name
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        // get loginData from cookie
        let loginData = getCookie('key');

        // if loginData is undefined, do nothing
        if(typeof loginData === "undefined") return;

        // decode base64 & parse json
        loginData = JSON.parse(atob(loginData));

        // if not logged in, do nothing
        if(!loginData.isLoggedIn) return;

        // page refreshed & has a session in cookie,
        // check whether this cookie is valid or not
        this.props.getStatusRequest().then(
            () => {
                console.log(this.props.status);
                // if session is not valid
                if(!this.props.status.valid) {
                    // logout the session
                    loginData = {
                        isLoggedIn: false,
                        username: ''
                    };

                    document.cookie='key=' + btoa(JSON.stringify(loginData));

                    // and notify
                    let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
                    Materialize.toast($toastContent, 4000);

                }
            }
        );
    }

    handleLogout = () => {
        this.props.logoutRequest().then(() => {
            Materialize.toast('Good Bye!', 2000);

            // EMPTIES THE SESSION
            let loginData = {
                isLoggedIn: false,
                username: ''
            };

            document.cookie = 'key=' + btoa(JSON.stringify(loginData));
        })
    }

    render() {

        return (
            <Router>
                {/*{isAuth ? undefined :*/}
                <div id="container">
                    <SideBar />
                    <Header 
                        isLoggedIn={this.props.status.isLoggedIn}
                        onLogout={this.handleLogout}/>
                    <div id="content-wrapper">
                        <div className="mui--appbar-height"></div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/counter" component={Counter} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
                {/*}*/}
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: () => {
            return dispatch(actions.getStatusRequest());
        },
        logoutRequest: () => {
            return dispatch(actions.logoutRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);