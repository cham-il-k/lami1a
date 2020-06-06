import React from 'react';
import { connect } from 'react-redux'
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import { Link } from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import { createUserProfilDocument } from '../../util/db/auth.firebase';
import { selectCurrentProfil} from './../../store/selectors/profil'
import { setCurrentProfil} from './../../store/actions/profil'
import { SignUpContainer, SignUpTitle, ButtonsBarContainer, Message } from './signUp-styled';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import firebaseApp, { firestore, auth} from './../../util/db/db'
class SignUp extends React.Component {
  state = {
    login: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
   componentDidMount() {
    
    
  }
  handleSubmit = async event => {
    const {setCurrentProfil, match, history} = this.props
    const { addToast } = useToasts()
    event.preventDefault();
     const { login, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return addToast('password and confirmed Fail', { appearance: 'error' })
     }
    try {
      const docRef = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const userRef = await createUserProfilDocument(docRef.user, { login });
      if (userRef) {
        userRef.onSnapshot(snapshot => {
          setCurrentProfil({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
        history.push('/')
        return addToast('Saved Successfully', { appearance: 'success' })
      } else 
       {
       return  addToast(`cant set setCurrentProfil ${login}, ${email}`, { appearance: 'error' })

      }
    } catch (error) {
      return   addToast(error.message, { appearance: 'error' })
 
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { login, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>Join us</SignUpTitle>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='login'
            value={login}
            onChange={this.handleChange}
            label='Login'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'>SIGN UP</CustomButton>
            <Message>
              IF already user ?
            </Message>
              <CustomButton link='link' to='/signin' > SIGNIN</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignUpContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
    profil: selectCurrentProfil
})
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentProfil: (profil) => dispatch(setCurrentProfil(profil))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
