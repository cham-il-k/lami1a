import React, { Component} from 'react';
//import { BrowserRouter } from 'react-router-dom';

import { NotFoundContainer } from './not-found.styled.jsx';      


class NotFound extends Component   {
    
      
    render() {
        return(
            <NotFoundContainer>
                <p style={{"textAlign":"center"}}>Page Not Found and also not</p>
            </NotFoundContainer>
            );
    }; 
}


    
export {NotFound as default};