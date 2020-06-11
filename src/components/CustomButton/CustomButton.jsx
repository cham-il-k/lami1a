import React from 'react';

import { CustomInputContainer, CustomButtonContainer, CustomLinkContainer } from './CustomButton-styled';

const CustomButton = ({ children, ...props }) => {
  if(props.link) {
    return <CustomLinkContainer {...props}>{children}</CustomLinkContainer>

  } else if(props.input) {
    return <CustomInputContainer {...props} ></CustomInputContainer>

  }
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>

}

export default CustomButton;
