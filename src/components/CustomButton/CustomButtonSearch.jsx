import React from 'react';

import { CustomClearContainer, CustomButtonContainer, } from './CustomButtonSearch.styled';

const CustomButton = ({ children, ...props }) => {
  
  if(props.clear) {
  return <CustomClearContainer {...props}> { children }</CustomClearContainer>

  }
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>

}

export default CustomButton;
