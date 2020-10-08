
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {green1, green2, blanc, green51, green4, btnInvert} from './../variables'

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
  color:${green4};
  border:1px solid ${green2};
  text-decoration:none;
  margin-left: 1rem;
  transform: scale(1.1);
	transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  &:hover {
	  cursor: pointer;
    box-shadow:0px 0px 2px ${green1};
    opacity: 0.9;
    background-color:${blanc};
	  }`;
export const OptionLinkHide = styled(Link)`
padding: 10px 15px;
cursor: pointer;
display:none;
font-weight: lighter;
font-size: 1.5rem;
color:${green4};
text-decoration:none;
`;
export const MainBar =styled.div`

`
export const SecondBar =styled.div`

`