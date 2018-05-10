import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Layout } from 'antd';

import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Main from './Main';
import Resources from '../components/Resources';

const history = createBrowserHistory();

class App extends Component {
    static childContextTypes = {
        dashboardWidgets: PropTypes.object,
        resourceDetails: PropTypes.object,
        resourceSummaryDetails: PropTypes.object,
    }

    getChildContext() {
        return {
            dashboardWidgets: this.props.configurations.dashboardWidgets,
            resourceDetails: this.props.configurations.resourceDetails,
            resourceSummaryDetails: this.props.configurations.resourceSummaryDetails,
        };
    }

    render() {
        return (
            <Router>
                <Layout style={{ height: '100vh' }}>
                    <Switch>
                        <Main history={history}>
                            <Route exact path="/" render={() => (<Redirect to="/about" />)} />
                            {/* <Route path="/home" component={Home} /> */}
                            <Route path="/about" component={About} />
                            <Route path="/dashboards" component={Dashboard} />
                            <Route path="/resources" component={Resources} />
                        </Main>
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
