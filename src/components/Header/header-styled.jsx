
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {greenAzur} from './../variables'
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  
  justify-content: space-between;
  /* margin-bottom: 25px; */
`;

export const LogoContainer = styled.div`
  height: 100%; 
  padding: 25px;
  cursor: pointer;
  background-color:white;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: lighter;
  font-size: 1.5rem;
  color:${greenAzur};
  text-decoration:none;
`;
