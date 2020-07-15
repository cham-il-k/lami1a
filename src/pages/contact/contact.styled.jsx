import styled from 'styled-components';
import {textBlue} from '../../components/variables'
export const ContactContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 400px;
`;

export const ContactTitle = styled.h2`
  margin: 10px 0;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Message = styled.h2`
margin: 10px;
color:${textBlue}
`;