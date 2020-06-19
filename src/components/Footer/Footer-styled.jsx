import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'
import { maxWidth, blanc, green2, green4, textBlack, blue41,} from './../../components/variables'

export const FooterContainer = styled.div`
    background-color: ${blanc};
    flex-direction:row ;
    display: flex;
    max-width:${maxWidth} ;
    justify-content: center;
    align-items:flex-end;
    flex-wrap:nowrap;
    height:3rem;
    justify-content:space-around;
    align-content:stretch;
`

export const NavigationContainer = styled.div`
    padding: 1rem auto;
    font-size: 1.4rem;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-around;
    bottom:1rem;
    `

export const CustomLinkContainer = styled(Link)`
      color: ${green4};
      text-decoration:none;
      display:flex;
      letter-spacing: 0.5px;
      padding: 1rem 2rem 1rem;
      font-size: 1.5rem;
      font-weight:400;
      flex-shrink:0;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background-color: ${blue41};
        opacity:0.8;
        border: none;
        font-size: 1.5rem;
        color:${textBlack};
 }
 `
export const CustomAContainer = styled.a `
      color: ${green4};
      text-decoration:none;
      display:flex;
      letter-spacing: 0.5px;
      padding: 1rem 2rem 1rem;
      font-size: 1.5rem;
      font-weight:400;
      flex-shrink:0;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background-color: ${blue41};
        opacity:0.5;
        border: none;
        font-size: 1.5rem;
        color:${textBlack};
 }
 `

export const CopyRight = styled.div`
    color: ${textBlack};
    padding: 1rem auto;
    font-size: 1.4rem;
    
`
export const buttonStyles = css`
  background-color: ${textBlack};
  color: white;
  border: none; 
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;