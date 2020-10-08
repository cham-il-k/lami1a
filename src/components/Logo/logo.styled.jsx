import styled, {keyframes, css}  from 'styled-components'
import {Link} from 'react-router-dom'
import {textBlanc, tete, yad, point,cor, textBlack, bleuDense,green2} from '../variables'
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
  background:#aaa;
  height:117px;
  margin:5px;
  position:relative;
  display:flex;
  transform:rotate(45deg);
  transition: 2s;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  &:hover {
      transition:0s;
    
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
    margin-top:3rem;
    align-self:center;  
    font-size:3rem;

    color: ${green2} !important;
    transform:rotate(-45deg);
    &::first-letter {
      color:${green2}
    }
`

export const TeteLogo = styled.div`
position: absolute;
top:2px;
left: 47px;
width:70px;
height:70px;
background:linear-gradient(${tete},${cor});
color: ${textBlanc};
margin:0 auto;
transform: rotate(-45deg);
border-radius: 5px;
`
export const YadLogo = styled.div`
position: absolute;
background: linear-gradient(${yad},${tete}) ;
color: ${textBlanc};
top:25px;
left:80px;
width:30px;
height:130px;
transform: rotate(45deg);
border-radius: 5px;
`
const bat = keyframes`
  from {
    transform: scale(1.5) rotate(45deg);
}

  to {
    transform: scale(1) rotate(45deg);
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const CorLogo = styled.div`
position: absolute;
background: linear-gradient(${cor},${point} );
color: ${textBlack};
top:60px;
left:20px;
width:50px;
height:50px;
z-index:1;
animation: ${bat} 2s linear infinite;
transition:transform 2s linear infinite;
border-radius: 3px;

`
export const Point = styled.div`
position: absolute;
background-color: ${point};
color: ${textBlack};
top:125px;
left:30px;
width:30px;
height:30px;
transform: rotate(45deg);
border-radius: 3px;
`
