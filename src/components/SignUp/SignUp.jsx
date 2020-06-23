import React, { useState} from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import {  createStructuredSelector } from 'reselect'
import { selectCurrentProfil} from './../../store/selectors/profil'
import { SignUpContainer, SignUpTitle, ButtonsBarContainer, Message } from './signUp.styled';
import { ToastContainer, toast } from 'react-toastify';
import { signUpStart } from './../../store/actions/profil'
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({signUpStart, setCurrentProfil, match, history} ) => {
  
const [credential, setCredential] = useState({
        email:'', password:'',confirmPassword:'', login:''})
  
const notify = (message) => toast(`${message}`);
const {  email, login, password, confirmPassword } = credential;
  
const  handleSubmit =  event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      notify('password and confirmed dont match')
      history.push('/signup')
      return
    }
    try {
      signUpStart({email,password,login})
        notify(`signup succeed ${email}`)
        history.push('/')
    } catch (error) {
      notify(error)
    }
  }
const handleChange = event => {
  const { name, value } = event.target;
    setCredential({ ...credential, [name] : value });
}

    return (
      <>
      <ToastContainer/>
      <SignUpContainer>
        <SignUpTitle>Join us</SignUpTitle>
        <form  onSubmit={handleSubmit}>
          <FormInput
          type='text'
          name='login'
          value={login}
          onChange={handleChange}
          label='Login'
          required
        />
          <FormInput
            name='email'
            type='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton input type='submit' value='SIGN UP' />
            <Message>
              Already User?
            </Message>
              <CustomButton link='link' to='/signin' > SIGNIN</CustomButton>
          </ButtonsBarContainer>
          <ToastContainer />
        </form>
      </SignUpContainer>
      </>
    );
}


const mapStateToProps = createStructuredSelector ({
    profil: selectCurrentProfil
})

const mapDispatchToProps = ( dispatch) => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
