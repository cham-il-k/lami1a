import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { selectErrorProfil, selectCurrentUser, selectCurrentProfil } from './../../store/selectors/profil'
import { googleSigninStart, emailSigninStart, setCurrentProfil,setNullCurrentUser, setNullError, setNullCurrentPtrofil, setNullCurrentProfil} from '../../store/actions/profil';
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
import { isEmpty } from '../../util/validators';

const SignIn = ({error, currentProfil, currentUser, googleSigninStart, emailSigninStart, history}) =>  {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
   
const notifyError = () => toast.error(`SignIn Error  ! ${error['error']}` , {
  position: toast.POSITION.BOTTOM_RIGHT
});
const notifySuccess = () => toast.success(`SignIn Success ${currentProfil['email']}`, {
  position: toast.POSITION.TOP_CENTER
});


  const handleSubmit = async event => {
    event.preventDefault();
      try {
          const res =  await emailSigninStart({email, password})
          //if(error['code'] === "auth/wrong-password" || error['code'] === 'auth/user-not-found'){
          //console.log({res})  
          }catch(error) {
          notifyError( )
        }
}
useEffect(() => {
  setNullError()
  setNullCurrentProfil()
  setNullCurrentUser()
 
}, [])
useEffect(() => {
        console.log({currentProfil})
        console.log({error})
        if(!isEmpty(error)) {
          notifyError()
        }
        if(!isEmpty(currentProfil)){
          notifySuccess()
          history.push(`/`);
        }
}, [error, currentProfil, currentUser ])

return (
      <SignInContainer>
        <SignInTitle>SignIn</SignInTitle>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={(e) =>setEmail(e.target.value) }
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type= {showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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
({ 
  currentProfil: selectCurrentProfil,
  currentUser: selectCurrentUser,
  error:selectErrorProfil

})

const mapDispatchToProps = (dispatch) => ({ 
  googleSigninStart : () => dispatch(googleSigninStart()),
  emailSigninStart : (credential) => dispatch(emailSigninStart(credential)),
  setNullError: () => dispatch(setNullError()),
  setNullCurrentProfil:() => dispatch(setNullCurrentProfil())

})

const SignInContain = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SignIn)

export default SignInContain 
