import React from 'react';

const stateToProps = (mixins) => (ProxyComponent) => {
    return mixins.reduce((ProxyComponent, Mixin) => {
        return class extends Mixin {
            static displayName = ProxyComponent.displayName || ProxyComponent.name;
            render() {
                console.log('{this}', this);
                console.log('{handlers}', this.handlers);
                console.log('{props}', this.props);
                console.log('{state}', this.state);
                console.log('{props.handlers}', this.props.handlers);
                const newHandlers = Object.assign({}, this.props.handlers, this.handlers);
                const props = Object.assign({}, this.props, this.state, {handlers: newHandlers});
                return <ProxyComponent {...props} />;
            }
        }
    }, ProxyComponent);
}

export default stateToProps;