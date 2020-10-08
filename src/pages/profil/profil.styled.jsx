import styled from 'styled-components';
import {textBlue, green2, green1} from '../../components/variables'

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height:100%;
  justify-content: space-between;
`;

export const ProfilContainer = styled.div`
  display: flex;
  margin: 0 2rem;
  flex-direction: column;
  width: 100%;
`;
 export const CollectionContainer = styled.div`
 display: flex;
 margin: 0 2rem;
 flex-direction: column;
 width: 100%;

`; 
export const ProfilTitle = styled.h2`
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
color:${textBlue}
`;