import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChildAbout extends Component {
    static propTypes = {
        name: PropTypes.string,
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.name === 'test') {
            return true;
        }
        return false;
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                {name}
            </div>
        );
    }
}
