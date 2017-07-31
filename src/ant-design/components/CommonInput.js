import React, { Component } from 'react';
import { Input } from 'antd';
import ppHOC from './ppHOC';

class CommonInput extends Component {
    state = {
        textMessage: '',
    }

    handlers = {
        onChange: (e) => {
            console.log(e.target.value);
            this.setState({
                textMessage: e.target.value,
            });
        },
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Input onChange={this.props.onChange} />
            </div>
        );
    }
}

export default CommonInput;
