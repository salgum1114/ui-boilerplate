import React from 'react';
import CommonInput from './CommonInput';
import CommonRadio from './CommonRadio';
import StateToProps from './StateToProps';

class About extends React.Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <CommonInput {...this.props.handlers} />
                <CommonRadio {...this.props.handlers} />
                <h1>Hello!</h1>
                <h1>Hello!</h1>
                <h1>Hello!</h1>
                <h1>Hello!</h1>
                <h1>Hello!</h1>
            </div>
        );
    }
};

export default StateToProps([CommonInput, CommonRadio])(About);
