import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ResourceTree from './ResourceTree';
import Panel from '../containers/resource/panel/Panel';
import Scheduled from './Scheduled';

class Resources extends Component {
    static contextTypes = {
        resourceDetails: PropTypes.object,
    }

    state = {
        selectedResource: {
            type: 'group',
        },
        count: 0,
    }

    componentWillMount() {
        setTimeout(() => {
            console.log('first');
        }, 1000);
        setImmediate(() => {
            console.log('second');
        }, 1000);
    }

    componentDidMount() {
        // this.log();
    }

    componentWillUnmount() {
        clearInterval(this.scheduledId);
    }

    @Scheduled(1000)
    log() {
        this.setState({
            count: this.state.count + 1,
        }, () => {
            console.log(this.state.count);
        });
    }

    onSelect = (resource) => {
        this.setState({
            selectedResource: resource,
        });
    }

    render() {
        return (
            <Layout
                style={{
                    height: '100vh',
                }}
            >
                <ResourceTree onSelect={this.onSelect} />
                <Layout.Content>
                    <Panel resource={this.state.selectedResource} resourceDetails={this.context.resourceDetails} />
                </Layout.Content>
            </Layout>
        );
    }
}

export default Resources;
