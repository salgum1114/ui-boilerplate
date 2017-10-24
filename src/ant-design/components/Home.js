import React, { Component } from 'react';

import { Table, Row, Menu, Dropdown, Icon, Checkbox } from 'antd';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    width: 150,
}, {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class Home extends Component {
    state = {
        visible: false,
      };
      handleMenuClick = (e) => {
        if (e.key === '3') {
          this.setState({ visible: false });
        }
      }
      handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
      }
    render() {
        const menu = (
            <Menu multiple onClick={this.handleMenuClick}>
              <Menu.Item key="0" disabled>
                <Checkbox>1st menu item</Checkbox>
              </Menu.Item>
              <Menu.Item key="1" disabled>
                <Checkbox>2nd menu item</Checkbox>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3" disabled>
                <Checkbox>3d menu item</Checkbox>
            </Menu.Item>
            </Menu>
          );
        return (
            <Row>
                <Dropdown overlay={menu} trigger={['click']}
                    onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
                >
                <div className="ant-dropdown-link" href="#">
                  Click me <Icon type="down" />
                </div>
              </Dropdown>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
            </Row>
        );
    }
}

export default Home;
