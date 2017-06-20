import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import MenuList from '../components/MenuList';
import Title from '../components/Title';

class Main extends Component {

    state = {
        collapsed: false,
        triggerIcon: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        let matches;
        if (this.sider) {
            matches = this.sider.mql.matches;
        }

        return (
            <Layout>
                <Layout.Sider
                ref={(c) => { this.sider = c; }}
                trigger={null}
                breakpoint="sm"
                collapsedWidth="0"
                collapsed={this.state.collapsed}
                onCollapse={(collapsed, type) => { this.setState({ collapsed }); }}
                >
                    <div className="main-logo">
                        <Link to="/home">ThingStar</Link>
                    </div>
                    <MenuList />
                </Layout.Sider>
                <Layout>
                    <Title
                    location={this.props.location}
                    collapsed={this.state.collapsed}
                    toggle={this.toggle}
                    matches={matches}
                    />
                    <Layout.Content className="code-box-demo">
                        {this.props.children}
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main;
