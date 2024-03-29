import React, { Component} from 'react';
import styled from 'styled-components'
import {red1} from './../variables'
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

 const ErrorImageOverlay = styled.div`
    height:60vh;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
 `
 const ErrorImageContainer = styled.div`
 display:inline-block;
 background-image:${({imageUrl}) => `url(${imageUrl})` }; 
 background-position:center;
 background-size:cover;
 width: 40vh;
 height:40vh;
 `
 const ErrorImageText = styled.h2`
 font-size:28px;
 color:${red1};
 `

class ErrorBoundary extends React.Component {
        state = { hasError: false };
    
    static getDerivedStateFromError(error) {    // Update state so the next render will show the fallback UI.  
          return { hasError: true };  
        }
        componentDidCatch(error, errorInfo) {    // You can also log the error to an error reporting service    
            console.log(error, errorInfo);  }
            render() {
                if (this.state.hasError) {      // You can render any custom fallback UI      
                    return(

                        <ErrorImageOverlay>
                            <ErrorImageContainer imageUrl={'assets/error.png'}></ErrorImageContainer> 
                            <ErrorImageText>Server Error / network Error.</ErrorImageText>;  
                        </ErrorImageOverlay>
                        )
                      }
                    return this.props.children;
                }
            }
 export default ErrorBoundary;

