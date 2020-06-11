import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormTextAreaContainer,
  FormInputLabel
} from './FormInput-styled';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={(props.value && props.value.length) ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
