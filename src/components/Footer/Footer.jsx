import React from 'react'
import { FooterContainer, NavigationContainer, CustomLinkContainer, CopyRight, CustomAContainer } from './Footer-styled'
import { Router} from 'react-router-dom'
import LogoBox from '../../components/Logo/Logo'
const Footer = ({loading,error}) => {
return (

        <FooterContainer>
             <NavigationContainer>
                <CustomAContainer href='https://lami1a.org'> company </CustomAContainer> 
                <CustomLinkContainer to='/careers'>careers</CustomLinkContainer> 
                <CustomLinkContainer to='/policy'>policy</CustomLinkContainer> 
                 </NavigationContainer>
            <CopyRight>
                Built by &copy; 
                    <span className="navbar-brand ">lami1a
                    </span>
            </CopyRight>
        </FooterContainer>
)
         
}
export default (Footer)