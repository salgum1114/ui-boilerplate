import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildAbout extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        name: PropTypes.string,
    }

    state = {
        name: '',
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.name,
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextState:', nextState.name);
        console.log('this.state:', this.state.name);
        if (this.state.name !== nextState.name) {
            return true;
        }
        return false;
    }
    
    render() {
        const { visible } = this.props;
        const { name } = this.state;
        return (
            <div>
                {name}
            </div>
        );
    }
}

export default ChildAbout;
