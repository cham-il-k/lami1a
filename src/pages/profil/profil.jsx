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
import ProductEdit from './profilProducts'
import {auth} from './../../util/db/db'

const  ProfilProductsPage = ({currentProfil,collection, history, getProfilDocument, createProduct, updateProfil}) =>  {
  const initialSelec = [{ value: 'books', label: 'Books' },{ value: 'products', label: 'Products' }];
  const initialCollec = [{ value: 'sagesse', label: 'Sagesse' },{ value: 'dogme', label: 'Dogme' },
  { value: 'society', label: 'Society' }];
  const {email, collections, favourites, login, products } = currentProfil
  const [credential, setCredential] = useState({email, collections, favourites, login, products })
  
  const notify = (message) => toast(`${message}`);
  
  useEffect(() => {
  return () => {
      console.log({currentProfil})
  }
  }, [credential])

const handleUpdateProfil = async event => {
  event.preventDefault();
    try {
      console.log({credential})
      updateProfil(credential)
      notify(`${credential.login} is connected`)
    history.push(`/profil`);
  }catch(error) {
    notify(`${error}` )
  }
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
      value={credential.email}
      placeholder={credential.email}
      onChange={handleChangeProfil}
      label='Email'
      required
    />
    <FormInput
      type='text'
      name='address'
      value={credential.address}
      placeholder={credential.address}
      onChange={handleChangeProfil}
      label='address'
      required
    />
    <FormInput
      type='text'
      name='city'
      value={credential.city}
      placeholder={credential.city}
      onChange={handleChangeProfil}
      label='city'
      required
    />
    <FormInput
      type='text'
      name='country'
      value={credential.country}
      placeholder={credential.country}
      onChange={handleChangeProfil}
      label='country'
      required
    />
    < ButtonsBarContainer>
      <CustomButton type="submit" onClick={(e) => handleUpdateProfil(e)}>update</CustomButton>
      <Message>
        
      </Message>
        
      </ButtonsBarContainer>
    </form>
    </ProfilContainer>
{/*  /**PRODUCT MANAGEMENT*/}  
  <CollectionContainer id="CollectionContainer">
      <ProductEdit />
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
WithSpinner
)(ProfilProductsPage)

export default composedProfilProductPage;
