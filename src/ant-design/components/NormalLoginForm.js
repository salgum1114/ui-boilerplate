import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const Item = Form.Item;

class NormalLoginForm extends Component {
    onSubmit = (e) => {
        console.log('Login Submit');
    }
    
    onClickLogin = () => {
        const { onClickLogin } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onClickLogin(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form>
                <Item>
                    {
                        getFieldDecorator('username', {
                            rules: [{
                                required: true, message: 'Please Input username!',
                            }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />,
                        )
                    }
                </Item>
                <Item>
                    {
                        getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Please Input password!',
                            }],
                        })(
                            <Input type="password" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="Password" />,
                        )
                    }
                </Item>
                <Button type="primary" onClick={this.onClickLogin}>
                    Log In
                </Button>
            </Form>
        );
    }
}

export default Form.create()(NormalLoginForm);
