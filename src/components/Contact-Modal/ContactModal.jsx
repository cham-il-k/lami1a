import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import {sendMessage} from './../../store/actions/profil'
import FormInput from './../../components/FormInput/FormInput';
import CustomButton from './../../components/CustomButton/CustomButton';
import { selectCurrentProfil} from './../../store/selectors/profil'
import Spinner from '../Spinner/Spinner'
import {compose} from 'redux'
import Modal from 'react-modal'
import {
  ContactContainer,ContactTitle,ButtonsBarContainer,
  Coordone, CancelButton
  
} from './contact-modal.styled';
const ContactModal = ({  currentProfil, isOpen, onCancel, match,  history,...props }) => {
console.log({props})
console.log({currentProfil})
  const [city, setcity] = useState('')
  const [country, setcountry] = useState()
  const [message, setmessage] = useState()
  const [isopen, setisopen] = useState(isOpen)
console.log({isopen, isOpen})
const handleSubmit = () => {

}
  return (
    <Modal isOpen={isopen} onRequestClose={onCancel}>
        <ContactContainer>
      <ContactTitle>contact Message</ContactTitle>
      <form  onSubmit={handleSubmit}>
      <FormInput
          type='text'
          name='city'
          value={city}
          onChange={(e) => setcity(e.target.value) }
          label='City'
          required
      />
      <FormInput
          type='text'
          name='country'
          value={country}
          onChange={(e) => setcountry(e.target.value) }
          label='Country'
          required
      />
      <FormInput textarea
          rows="5" cols="33"
          name='message'
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          label='message'
          required
      />
      <ButtonsBarContainer>
          <CustomButton type='submit'> Send</CustomButton>
          </ButtonsBarContainer>
      </form>
      <Coordone>
      <p> lami1a selection</p>
      <p> Sainte Martehs</p>
      <p> 1301 Marseille</p>
      <p> tel: 06 99 30 72 23</p>
      </Coordone>
      <CancelButton onClick={() => setisopen(!isopen)}>X</CancelButton>
  </ContactContainer>

  </Modal>
  );
}
const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
});
const mapStateToProps = createStructuredSelector ({
    currentProfil: selectCurrentProfil
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactModal);

