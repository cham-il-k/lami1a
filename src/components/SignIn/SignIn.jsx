/**
 * 23bmgPxAML4e
 */
import React from 'react';
import { connect } from 'react-redux'
import {selectCurrentProfil } from './../../store/selectors/profil'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { googleSigninStart, signinStart, setCurrentProfil} from '../../store/actions/profil';
import { createStructuredSelector } from 'reselect'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { firestore, auth} from './../../util/db/db'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './SignIn-styled';

class SignIn extends React.Component {
  
  state = {
    email:'',
    password:''
  }
  
  handleSubmit = async event => {
    const { selectCurrentProfil, setCurrentProfil } = this.props
    event.preventDefault();
    const { email, password } = this.state;
    //const { addToast } = useToasts()
     try {
      const  userRef = await auth.signInWithEmailAndPassword(email, password);
      if (userRef) {
        userRef.onSnapshot(snapshot => {
          setCurrentProfil({
            id: userRef.id,
            ...userRef.data()
          })
        })
      this.props.history.push(`/profil/${userRef.uid}`);
      
      }
    }catch(error) {
      console.log(error)
    }
  }
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const {googleSigninStart, signInStart} = this.props
    return (
      <SignInContainer>
        <SignInTitle>Sign in </SignInTitle>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
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
}
const mapStateToProps = createStructuredSelector 
({ profil: selectCurrentProfil })

const mapDispatchToProps = (dispatch) => ({ 
  setCurrentProfil : (profil) => dispatch(setCurrentProfil(profil)),
  googleSigninStart : () => dispatch(googleSigninStart()),
 // signInStart : (email, password) => dispatch(signinStart({  email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
