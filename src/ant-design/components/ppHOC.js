import React from 'react';

const ppHOC = (WrappedComponent) => {
    return class PP extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: '',
            }
          
            this.onNameChange = this.onNameChange.bind(this);
        }
        onNameChange(event) {
            console.log(event.target.value);
            this.setState({
                name: event.target.value
            })
        }
        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            }

            console.log(newProps);
            console.log(this.props);
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }
}

export default ppHOC;
