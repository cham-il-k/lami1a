import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {compose} from 'redux'
import {withRouter, Redirect} from 'react-router-dom'
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import {  createStructuredSelector } from 'reselect'
import { selectCurrentProfil, selectErrorProfil} from './../../store/selectors/profil'
import { SpanError, ShowPasswordContainer,SignUpContainer, SignUpTitle, ButtonsBarContainer, Message, ShowPasswordInput } from './signUp.styled';

import { ToastContainer, toast } from 'react-toastify';
import {isSameAs, isEmpty } from '../../util/validators'
import {useForm} from 'react-hook-form'
import { signUpStart } from './../../store/actions/profil'
import 'react-toastify/dist/ReactToastify.css';

const initialLocation = {
  latitude: null, 
  longitude: null,
  speed: null
}
const SignUp = ({error, signUpStart, profil, match, history} ) => {
  
useEffect(() => {
  document.title='Lami1a Selection'
  console.log({profil})
  console.log({error})  
},[error, profil])


const [email, setEmail] = useState('')
const [login, setLogin] = useState('')
const [password, setPassword] = useState('')
const [retypePassword, setRetypePassword] = useState('')
const [showPassword, setShowPassword] = useState(false)
const [redirect, setRedirect] = useState(false)
const notify = (message) => toast(`${message}`);

const  handleSubmit = async (e) =>  
  {
  e.preventDefault()
  console.log({email})
  try {
    let cred ={ email, login, password }
    const result =  await signUpStart(cred)
      if(result){
        setRedirect(true)
      }else {
        notify('you cant register !!')
      } 
      } catch (error) {
      console.log({error})
      if (error['code'] === "auth/email-already-in-use" || error['code'] ==='auth/email-already-registred')
      notify(error['message'])
      return history.push('/signin')
  } 
}


return (
  <SignUpContainer>
    <SignUpTitle>Register</SignUpTitle>
    <form onSubmit={handleSubmit}>      
    <FormInput  name='login' type='text' label='Login' value={login} onChange={(e) => setLogin(e.target.value)} required  />
    <FormInput  name='email' type='email' value= {email} onChange={(e) => setEmail(e.target.value)} label='email'  required />
    <FormInput type= {showPassword? `text` : `password`} value={password} onChange={(e) => setPassword(e.target.value)}  name='password' 
        label='Password' required />
     <FormInput type= {showPassword? `text` : `password`} value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} name='confirmPassword' 
         label='Confirm Password' required />
     
    <ShowPasswordContainer>
        <ShowPasswordInput  type="checkbox" name="showPassword" onChange={() => setShowPassword(true)} defaultChecked= {false}/>
          show Password
    </ShowPasswordContainer>
      <ButtonsBarContainer>
        <CustomButton input type='submit' value='SIGN UP' />
        <Message>
          Already Registred?
        </Message>
        <CustomButton link='link' to='/signin'> SIGNIN</CustomButton>
      </ButtonsBarContainer>
    </form>
  </SignUpContainer>
)
}

const mapStateToProps = createStructuredSelector ({
    profil: selectCurrentProfil,
    error:selectErrorProfil
})

const mapDispatchToProps = ( dispatch) => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential))
})

const SignUpContain = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SignUp)

export default SignUpContain
