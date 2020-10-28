import styled from 'styled-components';
import { textBlack, green2, textBlue } from './../variables'
export const SignInContainer = styled.fieldset`
  display: flex;
  margin: 2rem auto;
  border:3px solid ${green2};
  border-radius: 3%;
  padding:2rem;
  flex-direction: column;
  width: 400px;
  justify-content: flex-start;
  align-items:flex-start;
`;
export const SignInTitle = styled.h2`
  margin: 10px 0;
  font-size:2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color:${textBlue};
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ShowPasswordInput = styled.input`
  color: ${textBlack};
  text-align:left;
  margin-right:1rem;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content:flex-start;
  align-items:center;
  padding-left: 2rem;
  padding-bottom: 2rem;
  color: ${textBlack};
  text-align:left;
`