import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Badge, Card, Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions/counter/counter';

class SummaryPanel extends Component {
    static contextTypes = {
        resourceSummaryDetails: PropTypes.object,
    }

    static propTypes = {
        resource: PropTypes.object,
    }

    incremental = () => {
        this.props.incremental();
    }

    decremental = () => {
        this.props.decremental();
    }

    render() {
        const { resourceSummaryDetails } = this.context;
        const { resource } = this.props;
        return (
            <Row gutter={12}>
                {
                    Object.keys(resourceSummaryDetails).map((key) => {
                        let SummaryDetailComponent;
                        if (resourceSummaryDetails[key].key) {
                            if (resource.type === resourceSummaryDetails[key].key) {
                                SummaryDetailComponent = resourceSummaryDetails[key].component;
                            }
                        } else {
                            SummaryDetailComponent = resourceSummaryDetails[key].component;
                        }
                        if (!SummaryDetailComponent) {
                            return null;
                        }
                        return (
                            <Col key={key} span={6}>
                                <Card>
                                    <SummaryDetailComponent resource={this.props.resource} />
                                </Card>
                            </Col>
                        );
                    })
                }
                <Button onClick={this.incremental}>Incremental</Button>
                <Button onClick={this.decremental}>Decremental</Button>
                <Badge count={this.props.count} showZero />
            </Row>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.counter.count,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    incremental: actions.incremental,
    decremental: actions.decremental,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPanel);
