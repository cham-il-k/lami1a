import styled, {keyframes, css}  from 'styled-components'
import {Link} from 'react-router-dom'
import {textBlanc, tete, yad, point,cor, textBlack, bleuDense,greenFlash ,blueFond, greenFin} from '../variables'
import { faTextWidth } from '@fortawesome/free-solid-svg-icons'

export const LogoContainer = styled.div`
    position: relative;
    font-size: 1.4rem;
    background-color: transparent;
    margin: -10px -20px ;
    width:200px;
    height:70px;
    flex-direction:column;
    display:flex;
      a {
            text-decoration:none
    }
    `
export const NameSite = styled(Link)`
    line-height:3rem;
    text-decoration:none;
    text-transform: uppercase;
    cursor:pointer;
    margin:50% 50%;
    color: ${greenFlash} !important;
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
