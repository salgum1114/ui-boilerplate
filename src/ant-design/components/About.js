import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import ChildAbout from './ChildAbout';
import NormalLoginForm from './NormalLoginForm';
import Login from '../containers/Login';

class About extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    }

    static defaultProps = {
        name: '',
    }

    state = {
        visible: true,
        name: 'Hello World!',
    }

    componentWillMount() {
        console.log('ComponentWillMount');
    }

    componentDidMount() {
        console.log('ComponentDidMount', this.props.name, this.state.visible);
    }

    componentWillReceiveProps(nextProps) {
        console.log('ComponentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ShouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('ComponentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate', prevProps, prevState);
    }

    onChangeInput = (e) => {
        const value = e.target.value;
        this.setState({
            name: value,
        });
    }

    onClickLogin = (values) => {
        console.log('Form values:', values);
    }
   
    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
}

export default About;
