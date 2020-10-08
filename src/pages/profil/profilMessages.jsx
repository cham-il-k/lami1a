import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector} from 'reselect'
import { isEmpty} from '../../util/validators'
import {selectCurrentMessages, 
      selectCurrentUsers } from '../../store/selectors/profil'
import { ProfilContainer ,Message, ButtonsBarContainer, ProfilTitle} from './profil.styled'
import {FileContainer, CollectionTitle, ProductTitle, 
  AddProductContainer,SelectContainer,ProductContainer,} from './collection.styled'
import {addMessageStart} from '../../store/actions/message'
import  FormInput from '../../components/FormInput/FormInput' 
import CustomButton  from '../../components/CustomButton/CustomButton' 
import { MainContainer, CollectionContainer } from './profil.styled';
import withAuthorization from '../../components/WithAuthorization/withAuthorization.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WithSpinner from '../../components/With-Spinner/With-Spinner';


const  ProfilMessagesPage = ({profil, currentProfil, collection, products, history, createMessageStart}) =>  {
const [message, setMessage] = useState({})
const notify = (message) => toast(`${{message}}`);
const handleSubmitMessage = async event => {
  event.preventDefault();
    try {
      createMessageStart(message)
      notify(`${{message}} is sent`)
       history.push(`/profil`);
  }catch(error) {
    notify(`${error}` )
}
}
const handleChangeMessage = (event ) => {
  const {value, name} = event.target
  const monMessage = {[name]: value}
  setMessage({...message, ...monMessage})
}

return(
  <MainContainer>
 <ProfilContainer>
   <ToastContainer />
  <ProfilTitle>Profil</ProfilTitle>
  <form  onSubmit={handleSubmitMessage}>
    <FormInput
      type='text'
      name='user'
      value={message.user}
      onChange={handleChangeMessage}
      label='receiver'
      required
    />
    <FormInput
      type='text'
      name='message'
      value={message.message}
      onChange={handleChangeMessage}
      label='message'
      required
    />
    <FormInput
      textarea
      name='message'
      value={message.description}
      onChange={handleChangeMessage}
      label='description'
      required
    />
    </form>
    < ButtonsBarContainer>
      <CustomButton type='submit'>Send</CustomButton>
      <Message>
        
      </Message>
        <CustomButton link='link' to='/signin' >  messages</CustomButton>
      </ButtonsBarContainer>
    </ProfilContainer>
{ /**PRODUCT MANAGEMENT*/}
  <CollectionContainer>
    <CollectionTitle>Suivi des Messages</CollectionTitle>
      <AddProductContainer>
      <ProductContainer>
        <ProductTitle>Add Product</ProductTitle>
      
      </ProductContainer>
    </AddProductContainer>
    </CollectionContainer>
  </MainContainer>
  
  )
}

const mapStateToProps = createStructuredSelector ({
  messages: selectCurrentMessages,
  users:selectCurrentUsers , 
})

const mapDispatchToProps = (dispatch) => ({
  createMessageStart:(message) => dispatch(addMessageStart(message))

})
const composedProfilMessages = compose(
connect(mapStateToProps, mapDispatchToProps),
withAuthorization,
WithSpinner
)(ProfilMessagesPage)

export default composedProfilMessages;
