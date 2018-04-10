import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

export default class MenuList extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/home">
                        <i className="material-icons margin-right-8 vertical-middle">home</i>
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/about">
                        <i className="material-icons margin-right-8 vertical-middle">people</i>
                        <span className="nav-text">about</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/dashboards">
                        <i className="material-icons margin-right-8 vertical-middle">dashboard</i>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/resources">
                        <i className="material-icons margin-right-8 vertical-middle">computer</i>
                        <span className="nav-text">Resources</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}
