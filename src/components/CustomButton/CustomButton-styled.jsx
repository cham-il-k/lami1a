import styled, { css } from 'styled-components';
import { bleuAzur, greenGrey, greenFin} from './../variables'
import {Link} from 'react-router-dom'

const buttonStyles = css`
  background-color: ${greenFin};
  color: white;
  border: none;

  &:hover {
    background-color: ${bleuAzur};
    color: black;
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
  background-color: ${greenGrey};
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
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
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 5px 0 5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;

  justify-content: center;

  ${getButtonStyles}
`;
