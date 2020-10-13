
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {green1, green2, blanc, green51, green4, btnInvert} from './../variables'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
  @media screen and (max-width: 800px){
    margin-bottom: 20px;
    flex-wrap:wrap
  }

  @media screen and (max-width:600px) {
	font-weight: normal;
  	font-size:1.2rem;
 	}

`;

export const LogoContainer = styled.div`
  height: 100%; 
  padding: 0 auto;
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
    }

    @media screen and (max-width:800px) {
      padding: 5px 5px;
      font-size: 1.3rem;
      margin-left: .7rem;
  }
  @media screen and (max-width:600px) {
  	padding: 3px 3px;
    font-size: 1rem;
    margin-left: .7rem;
  	}    
`;

export const OptionLinkHide = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  display:none;
  font-weight: lighter;
  font-size: 1.5rem;
  color:${green4};
  text-decoration:none;
`;
