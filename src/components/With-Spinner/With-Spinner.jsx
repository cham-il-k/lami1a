import React from 'react';
import Spinner from './../Spinner/Spinner'

const WithSpinner = WrappedComponent => 
({ isLoading,id, ...otherProps }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent key={id} {...otherProps} />
  );
};

export default WithSpinner;
