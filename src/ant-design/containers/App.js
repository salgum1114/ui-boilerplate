import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Layout } from 'antd';

import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Main from './Main';

const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <Router>
                <Layout style={{ height: '100vh' }}>
                    <Switch>
                        <Main history={history}>
                            <Route exact path="/" render={() => (<Redirect to="Home" />)} />
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/dashboards" component={Dashboard} />
                        </Main>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
