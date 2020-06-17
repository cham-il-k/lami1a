import React, { useState} from 'react'
import { connect } from 'react-redux'
import FormInput from './../../components/FormInput/FormInput';
import CustomButton from './../../components/CustomButton/CustomButton';
import {createStructuredSelector} from 'reselect'
import { selectCurrentProfil} from './../../store/selectors/profil'
import { ContactContainer, ContactTitle, ButtonsBarContainer, Message } from './contact-styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({sendMessage, match, history, createMessage}) => {

const notify = (message) => toast(`${message}`);


const [message, setMessage] = useState({email: '',text: '',country: '', city:''})
const {email , text, country, city} = message
const handleSubmit = async event => {


    event.preventDefault();
    try{
      createMessage(country, email, message).then(
          messageRefdb =>  {
            
            history.push('/')
          ('Saved Successfully', { appearance: 'success' })
          })
        } catch (error) {
      notify(error.message)
  }
  };

const  handleChange = event => {
    const { name, value } = event.target;
    setMessage({...message, [name] : value });
  };
return (
  <ContactContainer>
      <ContactTitle>Join us</ContactTitle>
      <form  onSubmit={handleSubmit}>
      <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
      />
      <FormInput
          type='text'
          name='ville'
          value={city}
          onChange={handleChange}
          label='Country'
          required
      />
      <FormInput
          type='text'
          name='ville'
          value={country}
          onChange={handleChange}
          label='Country'
          required
      />
      <FormInput textarea
          rows="5" cols="33"
          name='message'
          value={message}
          onChange={handleChange}
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



const mapStateToProps = createStructuredSelector ({
    profil: selectCurrentProfil
})

export default connect(mapStateToProps)(Contact);
