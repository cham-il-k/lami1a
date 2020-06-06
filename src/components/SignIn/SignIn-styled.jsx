import styled from 'styled-components';

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
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
`;
