import React, { Component} from 'react'
import { connect } from 'react-redux'
import FormInput from './../../components/FormInput/FormInput';
import CustomButton from './../../components/CustomButton/CustomButton';
import {createStructuredSelector} from 'reselect'
import { createUserProfilDocument } from '../../util/db/auth.firebase';
import { selectCurrentProfil} from './../../store/selectors/profil'
import { setCurrentProfil} from './../../store/actions/profil'
import { ContactContainer, ContactTitle, ButtonsBarContainer, Message } from './contact-styled';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import {  createContatctDocument } from './../../util/db/db'

class Contact extends Component {

    state = {
        email: '',
        message: '',
        country: ''
      }
       componentDidMount() {
        
        
      }
      handleSubmit = async event => {
        const {sendMessage, match, history} = this.props
        const {email, country, message} = this.state
        const { addToast } = useToasts()
        event.preventDefault();
        try{
        createContatctDocument(country, email, message).then(
              messageRefdb =>  {
                
                history.push('/')
              return addToast('Saved Successfully', { appearance: 'success' })
              })
            } catch (error) {
          return   addToast(error.message, { appearance: 'error' })
      }
      };
    
      handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name] : value });
      };
    
    
    render(){
    const { message, email, ville } = this.props;
        return (
        <ContactContainer>
            <ContactTitle>Join us</ContactTitle>
            <form  onSubmit={this.handleSubmit}>
            <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='Email'
                required
            />
            
            
            <FormInput
                type='text'
                name='ville'
                value={ville}
                onChange={this.handleChange}
                label='Country'
                required
            />
            <FormInput textarea='textarea'
                rows="5" cols="33"
                name='message'
                value={message}
                onChange={this.handleChange}
                label='message'
                required
            />
            <ButtonsBarContainer>
                <CustomButton type='submit'> Send</CustomButton>
               
            </ButtonsBarContainer>
            </form>
        </ContactContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
