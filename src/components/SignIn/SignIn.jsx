import React, { useState} from 'react';
import { connect } from 'react-redux'
import {selectCurrentProfil} from './../../store/selectors/profil'
import { compose } from 'redux'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { googleSigninStart, emailSigninStart, setCurrentProfil} from '../../store/actions/profil';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  ShowPasswordInput,
  ShowPasswordContainer
} from './signIn.styled';

const SignIn = ({googleSigninStart, emailSigninStart, history}) =>  {
const [credential, setCredential] = useState({email:'', password:''})
const [showPassword, setShowPassword] = useState(false)
const {  email, password} = credential;  
const notify = (message) => toast(`${message}`);
const handleSubmit = async event => {
  event.preventDefault();
    try {
      await emailSigninStart(credential)
      setCredential({email:'', password:''})
      notify(`${credential.email} is connected`)
      history.push(`/`);
  }catch(error) {
    notify(`${error}` )
}
}

const handleChange = async event  => {
  const {value, name} = event.target
   setCredential({...credential, [name]:value})
  
}
return (
      <SignInContainer>
        <SignInTitle>Register</SignInTitle>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={handleChange }
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type= {showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            label='password'
            required
          />
          <ShowPasswordContainer>
            <ShowPasswordInput type="checkbox" onChange={()=> setShowPassword(!showPassword)}
              defaultChecked={showPassword}/>
              show Password
          </ShowPasswordContainer>
      
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type='button' onClick={googleSigninStart} isGoogleSignIn>
              Google SignIn 
            </CustomButton>
          </ButtonsBarContainer>
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
