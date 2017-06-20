import React, { Component } from 'react';

import Header from '../components/Header';
import SideBar from '../components/SideBar';

class Layout extends Component {

    toggle = () => {
        this.sider.setState({ open: !this.sider.open });
    }

    render() {
        return (
            <div id="container">
                <SideBar ref={(c) => { this.sider = c; }} />
                <Header onLogout={this.handleLogout} toggle={this.toggle} />
                <div id="content-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
