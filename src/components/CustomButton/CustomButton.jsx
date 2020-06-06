import React from 'react';

import { CustomButtonContainer, CustomLinkContainer } from './CustomButton-styled';

const CustomButton = ({ children, ...props }) => {
  if(props.link) {
    return <CustomLinkContainer {...props}>{children}</CustomLinkContainer>

  }
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>

}

export default CustomButton;
