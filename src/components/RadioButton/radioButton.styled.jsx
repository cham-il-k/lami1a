import styled, { css } from 'styled-components';
import {green2,green3,blue3, blue4, textBlue} from '../variables'
import {Link} from 'react-router-dom'
  
export const RadioParent = styled.div`
  display:flex;
  justify-content:center;
  margin-right:.5rem;
  align-items: center;

  `
export const RadioContainer = styled.div`
  color: ${blue3};
  border: none;
  margin:0 .5rem;
  font-size:1rem;
  border-radius:.5rem;
  padding:.5rem;
  cursor:pointer;
  &:hover {
    cursor:pointer;
    color:${textBlue};
    border:0rem solid white;
    box-shadow:0 0 2px ${blue4};
  }
`
export const RadioLabel = styled.label`
  font-size:1rem;
  font-weight:300;
  margin-right:.5rem;
  & > span  {
    margin-left:2px
  }
` 