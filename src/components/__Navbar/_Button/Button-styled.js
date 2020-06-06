import styled , { css } from 'styled-components'
import {f_blanc,f_overlay,c_overlay,f_blue,f_vert, outline_back , black, blanc, vert,dark_grey,vert_kaki} from './../variables'
export const StyledButton = styled.button`
.cli-btn {
    font-size: 1.4rem;
    background-color: ${f_blue};
    outline: 0.5rem solide ${outline_back};
    border-radius:0.5rem;
    color: ${dark_grey};
    flex: 1 1 23%;
    height: 3rem;
    padding: .5rem ;
    cursor: pointer;
    margin:  0.2rem 2rem;
    transition: all 0.5s ease-in-out;
    &.signup {
        background-color: ${f_vert};
    }
    &:hover {
        background-color:${f_overlay};
        
        }
    &:focus {
        outline: none
    }
    .google {
        text-transform: capitalize;
        baground-color:${f_overlay}
        color:${c_overlay}
        &:hover {
            background-color: ${f_blanc}
            border: none
        }
    }
}

`/* 
type={type} onClick={handleClick} className={`${inverted ? 'inverted' : '' }
            ${ google ? 'google' : '' }
            cli-btn ${otherProps.className}` 
        } {...otherProps}
            >
          */   
