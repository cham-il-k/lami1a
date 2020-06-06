import React, { Component} from 'react';
/* class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage :''
    }
    componentDidCatch = (error, info ) => {
        this.setState({
            hasError: true,
            errorMessage:error
        })
    }
    render() {
        if (this.state.hasError) {
            return  <h1>Error has occured : {this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }
}
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {    // Update state so the next render will show the fallback UI.  
          return { hasError: true };  }
        componentDidCatch(error, errorInfo) {    // You can also log the error to an error reporting service    
            console.log(error, errorInfo);  }
            render() {
                if (this.state.hasError) {      // You can render any custom fallback UI      
                    return <h1>Something went wrong.</h1>;    }
                    return this.props.children;
                }
            }
 export default ErrorBoundary;

