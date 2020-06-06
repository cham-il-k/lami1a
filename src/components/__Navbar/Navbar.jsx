import React from 'react'

import {NavbarContainer, NavItem} from './Navbar-styled'

// google, inverted, handleClick
export default function Navbar({ children, ...props}) {
    return (
        <NavbarContainer {...props}>
                <NavItem to="/selection">Gifts
                       
                </NavItem>
                
                <NavItem to="/signup" tabIndex="-1" >SignUp
                    
                </NavItem> 
            
        </NavbarContainer>
    )
}
