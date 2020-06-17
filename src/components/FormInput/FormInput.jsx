import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormTextAreaContainer,
  FormInputLabel
} from './FormInput-styled';

const FormInput = ({ handleChange, label, textarea, value, ...props }) => (
  <GroupContainer>
    {
    textarea ? (
      <FormTextAreaContainer onChange={handleChange} {...props} /> 
    ):
    (<FormInputContainer onChange={handleChange} {...props} />)
    }
    {label ? (
      <FormInputLabel className={(value && value.length) ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
