import React, { Component } from 'react';
import { Tree, Layout } from 'antd';

const { TreeNode } = Tree;

class ResourceTree extends Component {
    onSelect = (selectedKeys, info) => {
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
                    defaultSelectedKeys={['0-0']}
                    defaultExpandedKeys={['0-0']}
                    onSelect={this.onSelect}
                >
                    <TreeNode title="Root" key="0-0">
                        <TreeNode title="Crane 1" key="0-0-0" />
                        <TreeNode title="101호" key="0-0-1" />
                        <TreeNode title="Default" key="0-0-2" />
                    </TreeNode>
                </Tree>
            </Layout.Sider>
        );
    }
}

export default ResourceTree;
