import styled, {keyframes, css}  from 'styled-components'
import {Link} from 'react-router-dom'
import {green4, textBlanc, tete, yad, point,cor, textBlack, bleuDense,green2} from '../variables'
import { faTextWidth } from '@fortawesome/free-solid-svg-icons'

const animate = keyframes`
  0% {
    filter:hue-rotate(0deg) blur(50px);
  }

  100% {
    filter:hue-rotate(360deg) blur(50px)
    }
`;

export const Contain = styled.div `
  width:117px;
  height:117px;
  background:transparent;
  margin:5px;
  display:flex;
  position:relative;
  transform:rotate(45deg);
  //transition: 2s transform;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border:1px solid blueviolet;
  &::after {
    content:"";
    width:117px;
    height:117px;
    position: absolute;
    left: 2px;
    top: 2px;
    background:greenyellow;
    opacity:.4;    
    transform:rotate(75deg);
    }

    &::before {
      content:"";
      width:117px;
      height:117px;
      background:tomato;
      opacity:.2;
      position: absolute;
      left: 4px;
      top: 4px;
      transform:rotate(25deg);
    
    }
  &:hover {
      transform: translate(2%,2%)
  }
   
`
export const Cursor = styled.div`
position: absolute;
width: 400px;
height: 400px;
top:0;
left:0; 
background:#0f0;
border-radius:50%;
transform: translate(-50%, -50%); 


`
export const Hexagone= styled.div`
    position: relative;
    animation: ${animate} 4s linear infinite;
    font-size: 1.4rem;
    background-color: #0f0;
    width:100px;
    height:100px;
    z-index:10;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); 
    transform:rotate(-45deg);
   
     /* clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); */
     /* clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
     */
   /*  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
    */  
     `
export const NameSite = styled(Link)`
    box-sizing:border-box;
    line-height:2rem;
    padding:0;
    text-decoration:none;
    text-transform: uppercase;
    cursor:pointer;
    margin-top:2rem;
    align-self:center;  
    font-size:1.3rem;
    //transform: rotate(-45deg);
    color: ${green2} !important;
    &::first-letter {
      color:${green4}
    }
    @media screen and (min-width: 768px) {
    font-size:1.5rem;
    display:none;
  }
  @media screen and (min-width: 992px) {
      align-self:center;
      font-size:1.7rem;
  }
  @media screen and (max-width: 800px){
    margin-bottom: 20px;
    width:90px;
    background:#aaa;
    height:90px;
    margin:5px;
    padding:0
 
  } 
   
`
const bat = keyframes`
  from {
    transform: scale(1.5) rotate(45deg);
}

  to {
    transform: scale(1) rotate(45deg);
}
`;
