import React from 'react';
import {useForm} from 'react-hook-form'
import {
  GroupContainer,
  FormInputContainer,
  FormTextAreaContainer,
  FormInputLabel
} from './FormInput-styled';

const FormInput =({label, textarea, name, ...props }) => {
  //const {getValues} = useForm()
 
  debugger
  return (
  <GroupContainer>
    {
    textarea ? (
      <FormTextAreaContainer  name={name} {...props} /> 
    ):
    (<FormInputContainer  name={name} {...props} />)
    }
    {label ? (
      <FormInputLabel  {...props} className={props.value && props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
)};

export default FormInput;
