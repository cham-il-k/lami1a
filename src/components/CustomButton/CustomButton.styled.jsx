import styled, { css } from 'styled-components';
import { blue1, green1, blue4, green3,btnGgl, btnV, btnB, btnInvert, textBlue, textBlack, blanc } from './../variables'
import {Link} from 'react-router-dom'

const buttonStyles = css`
  &:hover {
    background-color: ${blue4};
    color: ${blanc};
    
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: ${btnGgl};
  color: ${btnInvert};

`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

const buttonCommon = css`
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
`
export const CustomButtonContainer = styled.button`
  ${buttonCommon}
  background-color: ${green1};
  
  ${getButtonStyles}
`;
export const CustomLinkContainer = styled(Link)`
  
  ${buttonCommon}
  background-color:${blue1};
  
  ${getButtonStyles}
`;

export const CustomInputContainer = styled.input`
min-width: 165px;
width: 165px;
height: 50px;
color:${textBlack} ;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 5px 0 5px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
cursor: pointer;
display: flex;
background-color:${btnV};
justify-content: center;

${getButtonStyles}
`;