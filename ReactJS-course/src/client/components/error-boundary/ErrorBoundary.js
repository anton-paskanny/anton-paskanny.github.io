import React from 'react';

import styles from './styles.css';

class ErrorBoundary extends React.Component {
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
        return this.props.children; 
    }
  }

  export default ErrorBoundary;