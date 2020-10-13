import styled, { css } from 'styled-components';
import { textBlue,  green1,blanc, blue2,orange1, orange2, textVert, blue4 } from '../variables'
import {Link} from 'react-router-dom'



const buttonStyles = css`
  min-width: 165px;
  width: 165px;
  height: 50px;
  text-decoration:none;
  color:${textBlue};
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  border-radius:3px;
  justify-content: center;
  &:hover {
    background-color: ${blue4};
    color: ${blanc};
    
  }

  @media screen and (max-width: 800px) {
    min-width: 7rem;
    padding: 0 5px 0 5px;
    font-size:.7rem;
 
  }
  @media screen and (max-width: 600px) {
    min-width: 5rem;
    padding: 0 5px 0 5px;
    font-size:.7rem;
 
    } 
`;

export const CustomButtonContainer = styled.button`
  background-color: ${blue2};
  color:${textBlue};
  &:hover {
    background-color: ${green1};
    color: ${blue2};
    }
  
  ${buttonStyles}
`;

export const CustomClearContainer = styled.button`
  background-color:${orange1};
  color:${textBlue} ;
  outline:none;
  &:hover {
    background-color: ${green1};
    color: ${orange2};
    }
  ${buttonStyles}

`;

const invertedButtonStyles = css`
  background-color: white;
  color: ${textVert};
   &:hover {
    background-color: ${textVert};;
    color: white;
    border: none;
  }
`;
