
import styled from 'styled-components';
import { Link,NavLink } from 'react-router-dom';
import {green1, green2, blanc, green51, green4, btnInvert} from './../variables'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
    flex-wrap:wrap;    
  /* margin-bottom: 25px; */
  @media screen and (min-width: 768px) {
    flex-direction:column;       
    flex-wrap:wrap;    
    }
 @media screen and (min-width: 992px) {
    flex-wrap:wrap;    
    flex-direction:column;       
    justify-content:center;
    flex-wrap:wrap;
}`;
export const ToggleButton = styled.div`
  cursor:pointer;
  font-size:5rem;
  color: ${green2}

`

export const LogoContainer = styled.div`
  height: 100%; 
  padding: 0 auto;
  cursor: pointer;
  background-color:white;
  visibility: collapse;
  @media screen and (min-width: 768px) {
  visibility: visible;
    display:flex;
  }
 @media screen and (min-width: 992px) {
         align-self:center;
         visibility:visible;
  }`;

export const OptionsContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-wrap:wrap; 
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content:flex-end;
  }
 @media screen and (min-width: 992px) {
         justify-content:flex-end;
}
`;

export const OptionLink = styled(NavLink)`
  padding: .5rem;
  font-weight: lighter;
  font-size: 1.3rem;
  color:${green4};
  border:1px solid ${green2};
  text-decoration:none;
  white-space: nowrap;
  margin-left: .5rem;
  transform: scale(1.1);
	transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  &:hover {
	  cursor: pointer;
    box-shadow:0px 0px 2px ${green1};
    opacity: 0.9;
    background-color:${blanc};
    }
  &.active {
    box-shadow:0px 0px 5px ${green1};
      cursor: pointer;
      opacity: 0.9;
       background-color:${blanc};
      
}
  @media screen and (max-width:768px) {
  	padding: 3px 3px;
    font-size: 1rem;
    margin-left: .7rem;
  	}    
    @media screen and (max-width:992px) {
      padding: 5px 5px;
      font-size: 1.3rem;
      margin-left: 1rem;
  }
`;

export const OptionLinkHide = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
  display:none;
  font-weight: lighter;
  font-size: 1.5rem;
  color:${green4};
  text-decoration:none;
`;
