import styled from 'styled-components';
import { textBlack } from './../variables'
export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 auto;
  width: 400px;
  @media (max-width: 800px) {
    background-color:black;
  }
  `;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  font-size:2rem;
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