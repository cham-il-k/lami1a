import styled, { css } from 'styled-components';
import {blue1,blue2, blue3, blue4, textBlack, } from './../variables'

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${blue1};
`;
export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  outline:none;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${textBlack};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${blue1};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus + label {
    ${shrinkLabelStyles};
    
  }
`;
export const FormTextAreaContainer = styled.textarea`
  background: none;
  background-color: white;
  color: ${textBlack};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${blue1};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus + label {
    ${shrinkLabelStyles}

  }
`;
export const FormInputLabel = styled.label`
  color: ${blue4};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
