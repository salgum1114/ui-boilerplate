import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Layout, Breadcrumb, Row, Col, Icon } from 'antd';

class Title extends Component {

    breadCrumb = () => {
        const path = this.props.location.pathname.split('/');
        let components;
        if (path.length >= 2) {
            components = <Breadcrumb.Item>{path[1]}</Breadcrumb.Item>;
        } else {
            components = path.map((str, index) => {
                if (str !== '') {
                    return <Breadcrumb.Item><Link to={`/${path[index]}`}>{str}</Link></Breadcrumb.Item>;
                }
                return null;
            });
        }

        return components;
    }

    render() {
        return (
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                <Row>
                    <Col span={18}>
                        <Col span={this.props.matches ? 2 : 0}>
                            <Icon
                            className="trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.toggle}
                            />
                        </Col>
                        <Col span={this.props.matches ? 22 : 24}>
                            <Breadcrumb style={{ margin: '0px 12px' }} separator=">">
                                {this.breadCrumb()}
                            </Breadcrumb>
                        </Col>
                    </Col>
                    <Col span={6}>
                        <a>
                            <i className="material-icons">lock_open</i>
                        </a>
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
}

export default Title;
