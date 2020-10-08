import React from 'react'
import { FooterContainer, NavigationContainer, CustomLinkContainer, CopyRight, CustomAContainer,OptionLink } from './Footer-styled'
import { Router} from 'react-router-dom'
import LogoBox from '../../components/Logo/Logo'
const Footer = ({loading,error}) => {
return (
        <FooterContainer>
            <NavigationContainer>
                <OptionLink href='https://lami1a.org'> company </OptionLink> 
                <OptionLink to='/careers'>careers</OptionLink> 
                <OptionLink to='/policy'>policy</OptionLink> 
            </NavigationContainer>
            <CopyRight>
                Built by &copy; 
                    <span className="navbar-brand ">lami1a
                    </span>
            </CopyRight>
        </FooterContainer>
)}
export default (Footer)