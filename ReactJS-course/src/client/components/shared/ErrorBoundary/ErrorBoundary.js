import React, { Component } from 'react';

import styles from './styles.css';


const ErrorBoundary = (WrappedComponent) => {
    return class extends Component {
        state = {
            error: null,
            errorInfo: null
        }
      
        componentDidCatch(error, errorInfo) {
            this.setState({
                error: error,
                errorInfo: errorInfo
            });
        }

        render() {
            if (this.state.errorInfo) {
                return (
                    <div className="error-dialog">
                        <h2 className="error-dialog__title">Something went wrong</h2>
                        <details style={{ whiteSpace: "pre-wrap" }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </details>
                    </div>
                );
            }
            return <WrappedComponent {...this.props} />; 
        }
    }
}

export default ErrorBoundary;