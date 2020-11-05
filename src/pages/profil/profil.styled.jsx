import styled from 'styled-components';
import {textBlue, green2, green1} from '../../components/variables'

export const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction:column;
  width: 100%;
  height:100%;
  @media screen and (min-width: 992px) {
  flex-direction:row;
  justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    padding: 2px;
    flex-direction:row;
  justify-content: space-between;
    
  }
`;

export const ProfilContainer = styled.div`
  display: flex;
  margin: 0 .5rem;
  flex-direction: column;
  width: 100%;
  max-width:400px;
  margin:0 auto;
`;
 export const CollectionContainer = styled.div`
 display: flex;
 margin: 0 .5rem;
 flex-direction: column;
 width: 100%;
 max-width:500px;
  margin:0 auto;

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