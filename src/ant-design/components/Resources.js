import React, { Component } from 'react';
import { Layout } from 'antd';
import ResourceTree from './ResourceTree';
import Panel from '../containers/resource/panel/Panel';

class Resources extends Component {
    render() {
        return (
            <Layout
                style={{
                    height: '100vh',
                }}
            >
                <ResourceTree />
                <Layout.Content>
                    <Panel />
                </Layout.Content>
            </Layout>
        );
    }
}

export default Resources;
