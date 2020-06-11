import React from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import {createStructuredSelector} from 'reselect'
import { createUserProfilDocument } from '../../util/db/auth.firebase';
import { selectCurrentProfil} from './../../store/selectors/profil'
import { setCurrentProfil} from './../../store/actions/profil'
import { SignUpContainer, SignUpTitle, ButtonsBarContainer, Message } from './signUp-styled';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { auth } from './../../util/db/db'

class SignUp extends React.Component {
  state= {
    login:'',
    email:'',
    password:''
  }
  
  componentDidMount() {
    }

  handleSubmit =  event => {
    event.preventDefault();
    const {setCurrentProfil, match, history} = this.props
    
    // const { addToast } = useToasts()
    
    const { login, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      console.log('password and confirmed Fail', { appearance: 'error' })
    return 
    }
    try {
      console.log('dans le signUp')
       auth.createUserWithEmailAndPassword(
        email,
        password
      ).then(userAuth => {
        const additionalData = {
          login,
          products:[],
          collections:[]
        }
        const  { user} = userAuth
        //console.log(user)
        createUserProfilDocument({...user,...additionalData}).then(
          userRefdb =>  {
            userRefdb.onSnapshot(snapshot => {
              console.log(snapshot)
              const {email,login, products, collections} = snapshot.data() 
              setCurrentProfil({
                id: snapshot.id,
                email,login, products, collections
                })
            })
            history.push('/')
        })})
        } catch (error) {
         return Promise.reject(error.message);
        }
  }
  
  handleChange = event => {
    const { name, value } = event.target;
      this.setState({ [name] : value });
  }
  render() {
    const { login, email, password, confirmPassword } = this.props;
    return (
      <SignUpContainer>
        <SignUpTitle>Join us</SignUpTitle>
        <form  onSubmit={this.handleSubmit}>
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
            <CustomButton input type='submit' value='SIGN UP' />
            <Message>
              Already User?
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
