
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {greenAzur, btnInvert} from './../variables'
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  
  justify-content: space-between;
  /* margin-bottom: 25px; */
`;

export const LogoContainer = styled.div`
  height: 100%; 
  padding: 2%;
  cursor: pointer;
  background-color:white;
`;

export const OptionsContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 10px;
  font-weight: lighter;
  font-size: 1.5rem;
  color:${greenAzur};
  text-decoration:none;
  transform: scale(1.1);
	transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  &:hover {
	  cursor: pointer;
    opacity: 0.9;
	  }

`;
export const OptionLinkHide = styled(Link)`
padding: 10px 15px;
cursor: pointer;
display:none;
font-weight: lighter;
font-size: 1.5rem;
color:${greenAzur};
text-decoration:none;
`;