import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import {  createStructuredSelector } from 'reselect'
import { selectCurrentProfil} from './../../store/selectors/profil'
import { ShowPasswordContainer,SignUpContainer, SignUpTitle, ButtonsBarContainer, Message, ShowPasswordInput } from './signUp.styled';
import { ToastContainer, toast } from 'react-toastify';
import { signUpStart } from './../../store/actions/profil'
import 'react-toastify/dist/ReactToastify.css';

const initialLocation = {
  latitude: null, 
  longitude: null,
  speed: null
}
const initialCredential = {email:'', password:'',confirmPassword:'', login:''}

const SignUp = ({signUpStart, setCurrentProfil, match, history} ) => {
  const [credential, setCredential] = useState(initialCredential)
  const [showPassword, setShowPassword] = useState(false)
  const notify = (message) => toast(`${message}`);

 const {  email, login, password, confirmPassword } = credential;
useEffect(() => {
  document.title='Lami1a Selection'
  
})

const  handleSubmit =  event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      notify('password and confirmed dont match')
      return  history.push('/signup')
    }
    try {
      const result =signUpStart({email,password,login}) 
      if (!!result){
        notify(`signup succeed ${email}`)
        return history.push('/')
      }else{
        console.log({result})
      }
      
    } catch (error) {
      if (error['code'] === "auth/email-already-in-use" || error['code'] ==='auth/email-already-registred')
      notify(error['code'])
      return history.push('/signin')
  }
}
const handleChange = event => {
  const { name, value } = event.target;
    setCredential({ ...credential, [name] : value });
}
return (
<>
  <SignUpContainer>
    <SignUpTitle>Join us</SignUpTitle>
    <form onSubmit={handleSubmit}>
      <FormInput type='text' name='login' value={login} onChange={handleChange} label='Login' required />
      <FormInput name='email' type='email' value={email} onChange={handleChange} label='Email' required />
      <FormInput type={showPassword ? 'text' : 'password' } name='password' value={password} onChange={handleChange}
        label='Password' required />
      <FormInput type={showPassword ? 'text' : 'password' } name='confirmPassword' value={confirmPassword}
        onChange={handleChange} label='Confirm Password' required />
    <ShowPasswordContainer>
        <ShowPasswordInput type="checkbox" onChange={()=> setShowPassword(!showPassword)}
          defaultChecked={showPassword}/>
          show Password
    </ShowPasswordContainer>
      <ButtonsBarContainer>
        <CustomButton input type='submit' value='SIGN UP' />
        <Message>
          Already Registred?
        </Message>
        <CustomButton link='link' to='/signin'> SIGNIN</CustomButton>
      </ButtonsBarContainer>
      <ToastContainer />
    </form>
  </SignUpContainer>
</>)
}

const mapStateToProps = createStructuredSelector ({
    profil: selectCurrentProfil
})

const mapDispatchToProps = ( dispatch) => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential))
})

const SignUpContain = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SignUp)

export default SignUpContain
