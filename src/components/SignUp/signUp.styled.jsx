import styled from 'styled-components';
import {textBlue, textBlack, green2} from '../variables'
export const SignUpContainer = styled.fieldset`
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

export const SignUpTitle = styled.h2`
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
  justify-content: space-between;
`;
export const Message = styled.h2`
margin: 10px;
color:${textBlue};
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
export const SpanError = styled.div`
  color: red;
`