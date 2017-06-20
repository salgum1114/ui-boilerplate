import React, { Component } from 'react';

import { Row, Card, Col } from 'antd';

class Dashboard extends Component {

    render() {
        return (
            <Row>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <Card title="test" style={{ minHeight: 160 }}>
                        {'hello'}
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <Card title="test" style={{ minHeight: 160 }}>
                        {'hello'}
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <Card title="test" style={{ minHeight: 160 }}>
                        {'hello'}
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <Card title="test" style={{ minHeight: 160 }}>
                        {'hello'}
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Dashboard;
