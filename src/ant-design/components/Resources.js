import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ResourceTree from './ResourceTree';
import Panel from '../containers/resource/panel/Panel';

class Resources extends Component {
    static contextTypes = {
        resourceDetails: PropTypes.object,
    }

    state = {
        selectedResource: {
            type: 'group',
        },
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
