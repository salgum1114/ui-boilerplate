import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { notification } from 'antd';

import LoginForm from '../components/LoginForm';
import * as actions from '../actions/authentication/authentication';

class Login extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    shouldComponentUpdate(nextProps) {
        console.log(nextProps);
        return true;
    }

    handleLogin = (values) => {
        this.props.login(values).then((response) => {
            notification.success({
                message: this.props.statusMessage,
            });
        }).catch((error) => {
            notification.error({
                message: this.props.statusMessage,
            });
        });
    }

    render() {
        return (
            <div ref={(c) => { this.div = c; }}>
                <LoginForm login={this.handleLogin} ref={(c) => { this.loginForm = c; }} />
                {this.props.statusMessage}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    statusMessage: state.authentication.statusMessage,
    isLoggedIn: state.authentication.isLoggedIn,
    username: state.authentication.username,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login: actions.login,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
