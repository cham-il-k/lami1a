import React from 'react';

import { CustomButtonContainer } from './CustomInput.styled';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
