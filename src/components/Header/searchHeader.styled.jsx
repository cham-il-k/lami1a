import styled  from 'styled-components'
import { blanc, green4, blue3, textBlack, blue1, blue2, green2 }  from '../variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FormSearch = styled.form`
    position:relative;
    align-self: center;
    display:flex;
    justify-content:center;
    margin-top:1rem;
    align-items:center;
    min-width: 7rem;
    padding: 0 5px 0 5px;
    font-size:.7rem;
    flex-direction:column;

    @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:space-evenly
 }
 @media screen and (min-width: 992px) {
  flex-direction:row;
  justify-content:space-evenly
}
            
`/* 
export const SearchIcon = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
    right:1rem;
    color:${green4};
    align-self:center;
    position: absolute;
    cursor:pointer;
    outline: none;
` */
export const FormInputSearch = styled.input`
    background-color: ${blanc};
    color: ${textBlack};
    height:3rem;
    margin-right:.5rem;  
    box-sizing:border-box;
    font-size: 1.3rem;
    padding: .5rem;
    border: 1px solid ${green2};
    transition: all .3s;
    &:focus {
    outline: none;
    }

  @media screen and (max-width: 800px) {
    min-width: 7rem;
    padding: 0 5px 0 5px;
    font-size:.7rem;
 
  }
  @media screen and (max-width: 600px) {
    min-width: 5rem;
    padding: 0 5px 0 5px;
    font-size:.7rem;
 
    } 
`