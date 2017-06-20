import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';

import Layout from './Layout';

const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <Router>
                <div id="container">
                    <Switch>
                        <Layout history={history}>
                            <Route exact path="/" render={() => (<Redirect to="Home" />)} />
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Layout>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
