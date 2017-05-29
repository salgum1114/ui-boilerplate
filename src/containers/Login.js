'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import Authentication from '../components/Authentication';
import * as actions from '../actions/authentication';

const history = createBrowserHistory();

class Login extends Component {

    constructor(props) {
        super(props);
        
    }

    handleLogin = (id, pw) => {
        return this.props.loginRequest(id, pw).then(() => {
            if(this.props.status === "SUCCESS") {
                // create session data
                let loginData = {
                    isLoggedIn: true,
                    username: id
                };

                let token = this.props.response.token;
                let refreshToken = this.props.response.refreshToken;

                document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                document.cookie = 'token=' + token;
                document.cookie = 'refreshToken=' + refreshToken;

                Materialize.toast('Welcome, ' + id + '!', 2000);
                this.props.history.push('/');
                return true;
            } else {
                let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
                Materialize.toast($toastContent, 2000);
                return false;
            }
        });
    }
    
    render() {
        return (
            <div>
                <Authentication 
                mode={true}
                onLogin={this.handleLogin}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.login.status,
        response: state.authentication.status.response
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: (id, pw) => {
            return dispatch(actions.loginRequest(id,pw));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);