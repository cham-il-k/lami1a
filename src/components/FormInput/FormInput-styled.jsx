import styled, { css } from 'styled-components';
import {green2, green1, textBlue,blue1, green4 } from './../variables'

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${textBlue};
`;
export const GroupContainer = styled.div`
  position: relative;
  margin: 5px 0;
  outline:none;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${textBlue};
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  line-height: 2px;
  margin: .3rem 0;
  padding:1rem 0;
  border: none;
  border-bottom: 1px solid ${green2};
  transition: all .3s;
    &:focus {
    outline: none;
    border-left: 1px solid ${green2};
    border-right: 1px solid ${green2};
    }
  &:focus + label {
    ${shrinkLabelStyles};
  
  }
`;
export const FormTextAreaContainer = styled.textarea`
  background: none;
  background-color: white;
  color: ${textBlue};
  font-size: 18px;
  display: block;
  width: 100%;
  margin: 1rem 0;
  border: none;
  border-bottom: 1px solid ${green2};
 transition: all .3s;
  &:focus {
    outline: none;
  }
  &:focus + label {
    ${shrinkLabelStyles}

  }
  `;
export const FormInputLabel = styled.label`
  color: ${textBlue};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 15px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
