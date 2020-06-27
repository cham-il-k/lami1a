/**
 * 23bmgPxAML4e
 */
import React, { useState} from 'react';
import { connect } from 'react-redux'
import {selectCurrentProfil } from './../../store/selectors/profil'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { googleSigninStart, emailSigninStart, setCurrentProfil} from '../../store/actions/profil';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signIn.styled';

const SignIn = ({googleSigninStart, emailSigninStart, history}) =>  {
const [credential, setCredential] = useState({email:'', password:''})
   
const notify = (message) => toast(`${message}`);

const handleSubmit = async event => {
  event.preventDefault();
    try {
      await emailSigninStart(credential)
      notify(`${credential.email} is connected`)
      history.push(`/`);
  }catch(error) {
    notify(`${error}` )
}
}

const handleChange = async event  => {
  const {value, name} = event.target
  const retCred = await setCredential({...credential, [name]:value})
  console.log({})
}
return (
      <SignInContainer>
       <SignInTitle>Sign in </SignInTitle>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange }
            value={credential['email']}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={credential['password']}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={googleSigninStart} isGoogleSignIn>
              Google SignIn 
            </CustomButton>
          </ButtonsBarContainer>
          <ToastContainer />
        </form>

      </SignInContainer>
    );
  }

const mapStateToProps = createStructuredSelector 
({ profil: selectCurrentProfil })

const mapDispatchToProps = (dispatch) => ({ 
  googleSigninStart : () => dispatch(googleSigninStart()),
  emailSigninStart : (email, password) => dispatch(emailSigninStart({email, password}))
})

const SignInContain = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SignIn)

export default SignInContain 
