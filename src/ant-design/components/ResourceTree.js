import React, { Component } from 'react';
import { Tree, Layout } from 'antd';

const { TreeNode } = Tree;

class ResourceTree extends Component {
    state = {
        selectedKeys: ['0'],
    }

    onSelect = (selectedKeys, info) => {
        this.props.onSelect(info.node.props.resource);
        this.setState({
            selectedKeys,
        });
        console.log('selected', selectedKeys, info);
    }

    render() {
        return (
            <Layout.Sider
                width={200}
                style={{
                    height: '100%',
                    background: '#fff',
                }}
            >
                <Tree
                    defaultSelectedKeys={['0']}
                    defaultExpandedKeys={['0']}
                    selectedKeys={this.state.selectedKeys}
                    onSelect={this.onSelect}
                >
                    <TreeNode title="Root" key="0" resource={{ type: 'group' }}>
                        <TreeNode title="Crane 1" key="0-0" resource={{ type: 'crane' }} />
                        <TreeNode title="101호" key="0-1" resource={{ type: 'bems' }} />
                        <TreeNode title="Default" key="0-2" resource={{ type: 'default' }} />
                    </TreeNode>
                </Tree>
            </Layout.Sider>
        );
    }
}

export default ResourceTree;
