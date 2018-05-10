import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
    static propTypes = {
        login: PropTypes.func,
    }

    static defaultProps = {
        login: () => { console.log('function not found!!'); },
    }

    state = {
    }

    onClick = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <FormItem>
                    {
                        getFieldDecorator('username', {
                            rules: [{ required: true, message: 'username is required!' }],
                        })(
                            <Input placeholder="Username" />,
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: 'password is required!' }],
                        })(
                            <Input type="password" placeholder="Password" />,
                        )
                    }
                </FormItem>
                <Button onClick={this.onClick}>로그인</Button>
            </Form>
        );
    }
}

export default Form.create()(LoginForm);
