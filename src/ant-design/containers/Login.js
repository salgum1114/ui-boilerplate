import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NormalLoginForm from '../components/NormalLoginForm';

import * as actions from '../actions/authentication/authentication';

class Login extends Component {
    onClickLogin = (values) => {
        console.log('Form values:', values);
        const username = values.username;
        const password = values.password;
        const { login } = this.props;
        login(username, password);
    }

    render() {
        const { isLoggedIn } = this.props;
        return (
            <div>
                <NormalLoginForm onClickLogin={this.onClickLogin} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authentication.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    login: actions.login,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
