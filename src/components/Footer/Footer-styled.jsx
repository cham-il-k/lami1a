import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'
import { green1,maxWidth, blanc, green2, green4, textBlack, blue41,} from './../../components/variables'

export const FooterContainer = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    background-color: ${blanc};
    display: flex;
    max-width:${maxWidth} ;
    justify-content: space-evenly;
    align-items:center;
    flex-wrap:nowrap;
    height:3.5rem;

`

export const NavigationContainer = styled.div`
    padding: 0.7rem auto;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content:space-around;
    `
export const OptionLink = styled(Link)`
padding: 7px 7px;
font-weight: lighter;
font-size: 1.5rem;
color:${green4};
border:1px solid ${green2};
text-decoration:none;
margin-left: 1rem;
transform: scale(1.1);
transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
&:hover {
  cursor: pointer;
  box-shadow:0px 0px 2px ${green1};
  opacity: 0.9;
  background-color:${blanc};
}`;

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