import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector} from 'reselect'
import { isEmpty} from '../../util/validators'
import Select from 'react-select';
import {selectCurrentProfil, 
      selectCurrentCollection, selectCurrentProducts} from '../../store/selectors/profil'
import { ProfilContainer ,Message, ButtonsBarContainer, ProfilTitle} from './profil.styled'
import {FileContainer, CollectionTitle, ProductTitle, 
  AddProductContainer,SelectContainer,ProductContainer,} from './collection.styled'
import {addProductStart,updateProductStart} from './../../store/actions/selection'
import {updateProfilStart, getProfilDocument } from './../../store/actions/profil'
import  FormInput from '../../components/FormInput/FormInput' 
import CustomButton  from '../../components/CustomButton/CustomButton' 
import { MainContainer, CollectionContainer } from './profil.styled';
import withAuthorization from '../../components/WithAuthorization/withAuthorization.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WithSpinner from '../../components/With-Spinner/With-Spinner';
import ProductEdit from './ProductEdit'
import ProductsList from './ProductsList'
import RadioButton from './../../components/RadioButton/RadioButton'
import {auth} from './../../util/db/db'

const  ProfilProductsPage = ({currentProfil,collection, history, getProfilDocument, createProduct, updateProfil}) =>  {
  
  const {uid,email, collections, favourites, address, city,  country, login, products, role } = currentProfil
  const [credential, setCredential] = useState({uid, email, collections, favourites, address, login, city, country, products, role})
  
  const notify = (message) => toast(`${message}`);
  
  useEffect(() => {
    console.log({credential})
    console.log({status: currentProfil.role})
   }, [credential])

const handleUpdateProfil = async event => {
  event.preventDefault();
    try {
      updateProfil(credential)
      history.push(`/profil`);
    }catch(error) {
    notify(`${error}` )
  }
}
const setRole = (role) => {
  setCredential({...credential,role})
}
const handleChangeProfil = (event ) => {
  const {value, name} = event.target
  setCredential({...credential, [name]: value })
}

return(
<MainContainer>
 <ProfilContainer id="ProfilContainer">
  <ProfilTitle>Profil</ProfilTitle>
  <form  onSubmit={handleUpdateProfil}>
    <FormInput
      type='text'
      name='login'
      value={credential.login}
      placeholder={credential.login}
      onChange={handleChangeProfil}
      label='Login'
      required
    />
    <FormInput
      type='email'
      name='email'
      value={email}
      placeholder={email}
      label='Email'
      disabled
    />
    <FormInput
      type='text'
      name='address'
      value={credential.address}
      placeholder={address}
      onChange={handleChangeProfil}
      label='address'
      required
    />
    <FormInput
      type='text'
      name='city'
      value={credential.city}
      placeholder={city}
      onChange={handleChangeProfil}
      label='city'
      required
    />
    <FormInput
      type='text'
      name='country'
      value={credential.country}
      placeholder={country}
      onChange={handleChangeProfil}
      label='country'
      required
    />
     <RadioButton handleChange={setRole} role={role}/>
    <ButtonsBarContainer>
      <CustomButton type="submit" onClick={(e) => handleUpdateProfil(e)}>update</CustomButton>
      <Message>
        
      </Message>
        
      </ButtonsBarContainer>
    </form>
    </ProfilContainer>
{/*  /**PRODUCT MANAGEMENT*/}  
  <CollectionContainer id="CollectionContainer">
      { (credential.role === 'org') ?
      <ProductEdit /> : 
      <ProductsList />
      }
    </CollectionContainer>
  </MainContainer>
  
  )
}

const mapStateToProps = createStructuredSelector ({
  currentProfil: selectCurrentProfil,
  collection:selectCurrentCollection || 'hectic', 
  products:selectCurrentProducts || []

})

const mapDispatchToProps = (dispatch) => ({
  createProduct:(product) => dispatch(addProductStart(product)),
  updateProduct:(product) => dispatch(updateProductStart(product)),
  getProfilDocument:(uid) => dispatch(getProfilDocument(uid)),
  updateProfil:(credential) => dispatch(updateProfilStart(credential))
})
const composedProfilProductPage = compose(
connect(mapStateToProps, mapDispatchToProps),
withAuthorization,
)(ProfilProductsPage)

export default composedProfilProductPage;
