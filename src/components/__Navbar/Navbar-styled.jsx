import styled , { css } from 'styled-components'
import {margin_nav,f_blanc,f_overlay,c_overlay,f_blue,f_vert, outline_back ,
     black, blanc, vert,dark_grey,vert_kaki} from '../variables'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
    font-size: 1.4rem;
    background-color: ${f_blanc};
    color: ${dark_grey};
    height: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    justify-content:center;
    position:ralative;
    `
export const NavItem = styled(Link)`
color: ${dark_grey};
line-height:2rem;
text-decoration:none;

cursor: pointer;
margin:0 2rem;
transition: all 0.5s ease-in-out;
border-bottom: 2px  solid transparent ;
&:hover {
    border-bottom: 2px solid ${margin_nav};
    transform:scale(1.5);      
    
    }

&.signup {
    background-color: ${f_blue};
}
}


`