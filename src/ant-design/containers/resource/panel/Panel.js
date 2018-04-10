import React, { Component } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Panel extends Component {
    static defaultProps = {
        resourceDetails: {},
    }

    render() {
        const { resourceDetails } = this.props;
        return (
            <Tabs>
                {
                    Object.keys(resourceDetails).map((key) => {
                        const DetailComponent = resourceDetails[key].component;
                        return (
                            <TabPane key={key} tab={resourceDetails[key].title}>
                                <DetailComponent />
                            </TabPane>
                        );
                    })
                }
            </Tabs>
        );
    }
}

export default Panel;
