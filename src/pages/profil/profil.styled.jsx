import styled from 'styled-components';
import {textBleu} from '../../components/variables'

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height:100%;
  justify-content: space-between;
`;

export const ProfilContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 400px;
`;
 export const CollectionContainer = styled.div`
 display: flex;
 margin: 0 auto;
 flex-direction: column;
 width: 400px;
`; 
export const ProfilTitle = styled.h2`
  margin: 10px 0;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Message = styled.h2`
margin: 10px;
color:${textBleu}
`;