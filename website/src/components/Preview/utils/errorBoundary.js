import React, { Component } from 'react';

const errorBoundary = Element => {
  return class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: undefined, info: undefined };
    }
    componentDidCatch(error, info) {
      this.setState({ error, info });
    }
    render() {
      if (this.state.error) {
        return (
          <div>
            <h3>☝️{this.state.error.toString()}</h3>
            {this.state.info && <pre>{this.state.info.componentStack}</pre>}
          </div>
        );
      }
      return typeof Element === 'function' ? <Element /> : Element;
    }
  };
};

export default errorBoundary;
