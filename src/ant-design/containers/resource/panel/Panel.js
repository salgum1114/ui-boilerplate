import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Panel extends Component {
    static propTypes = {
        resourceDetails: PropTypes.object,
        resource: PropTypes.object,
    }

    static defaultProps = {
        resourceDetails: {},
        resource: {},
    }

    panelRender = (resourceDetails) => {
        return Object.keys(resourceDetails).map((key) => {
            const DetailComponent = resourceDetails[key].component;
            return (
                <TabPane key={key} tab={resourceDetails[key].title}>
                    <DetailComponent resource={this.props.resource} />
                </TabPane>
            );
        });
    }

    render() {
        const { resource } = this.props;
        const resourceDetails = Object.assign({}, this.props.resourceDetails.default);
        Object.keys(this.props.resourceDetails).some((key) => {
            if (resource.type === key) {
                const details = this.props.resourceDetails[key];
                Object.keys(details).forEach((subKey) => {
                    Object.assign(resourceDetails, { [subKey]: details[subKey] });
                });
                return true;
            }
        });
        return (
            <Tabs>
                {this.panelRender(resourceDetails)}
            </Tabs>
        );
    }
}

export default Panel;
