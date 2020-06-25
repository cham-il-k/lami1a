import styled, { css } from 'styled-components';
import { blue4, green3,btnGgl, btnV, btnB, btnInvert, textBleu, textBlack } from './../variables'
import {Link} from 'react-router-dom'

const buttonStyles = css`
  &:hover {
    background-color: ${btnInvert};
    color: ${blue4};
    border: 1px solid black;
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

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  background-color: ${btnV};
   width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  color:${textBlack};
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
export const CustomLinkContainer = styled(Link)`
  min-width: 165px;
  width: 165px;
  height: 50px;
  text-decoration:none;
  color:${textBlack};
   letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  background-color:${btnB};
  justify-content: center;

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