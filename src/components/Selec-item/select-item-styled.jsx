import styled from 'styled-components';
import { textBlue, green2, blue2} from './../variables'

export const SelectContainer = styled.div`
  background: none;
  line-height:1.5;
  background-color: white;
  color: ${textBlue};
  font-size: 1.3rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${blue2};
  margin: 15px 0;
  & select {
  width: 100%;
   margin-left:0; 
   background-color: white;
  color: ${textBlue};
  font-size: 1.3rem;
  display: block;
  width: 100%;
  border: none;
  line-height: 1.3rem;
  margin: .3rem 0;
  padding:.5rem 0;
  border: none;
  transition: all .3s;
    &:focus {
    outline: none;
    border-left: 1px solid ${green2};
    border-right: 1px solid ${green2};
    }

  }
  &:focus {
    outline: none;
  
 }
`