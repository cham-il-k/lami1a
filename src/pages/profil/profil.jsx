import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector} from 'reselect'
import { isEmpty} from '../../util/validators'
import {selectCurrentProfil, selectCurrentRole,
      selectCurrentCollection, selectCurrentProducts, selectCurrentUser} from '../../store/selectors/profil'
import { ProfilContainer ,Message, ButtonsBarContainer, ProfilTitle} from './profil.styled'
import {addProductStart,updateProductStart} from './../../store/actions/selection'
import {updateProfilStart, getProfilDocument, signProfilStart } from './../../store/actions/profil'
import  FormInput from '../../components/FormInput/FormInput' 
import CustomButton  from '../../components/CustomButton/CustomButton' 
import { MainContainer, CollectionContainer } from './profil.styled';
import withAuthorization from '../../components/WithAuthorization/withAuthorization.jsx';
import ProductEdit from './ProductEdit'
import ProductsList from './ProductsList'
import RadioButton from './../../components/RadioButton/RadioButton'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  ProfilProductsPage = ({currentUser,  history, signProfil, createProduct, updateProfil}) =>  {
  
  const {uid,email, login } = currentUser
  
  const [credential, setCredential] = useState({uid, email, login})
  const notify = (message) => toast(`${message}`);
  const [collection, setCollection] = useState([])
  const [tags, setTags] = useState([])
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [products, setProducts] = useState([])
  const [role, setRole] = useState('')
  const [loginupdate, setLogin] = useState(login)
 
const handleUpdateProfil = async event => {
  event.preventDefault();
    try {
      //updateProfil(credential)
      signProfil({uid, loginupdate, email, address, city, country, role, collection,tags, products })
      history.push(`/profil`);
    }catch(error) {
    notify(`${error}` )
  }
}
const onSignProfil = async () => {
  
    try {
      console.log({uid, loginupdate, email, address, city, country, role, collection,tags, products })
      //updateProfil(credential)
      await signProfil({uid, loginupdate, email, address, city, country, role, collection,tags, products })
      history.push(`/profil`);
    }catch(error) {
    notify(`${error}` )
  }
}


return(
<MainContainer>
 <ProfilContainer id="ProfilContainer">
  <ProfilTitle>Profil</ProfilTitle>
  <form  onSubmit={handleUpdateProfil}>
    <FormInput
      type='text'
      name='login'
      value={loginupdate}
      placeholder={loginupdate}
      onChange= {(e) => setLogin(e.target.value)}
      label='Login'
      
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
      name='collection'
      value={collection}
      placeholder={collection}
      onChange= {(e) => setCollection(e.target.value)}
      label='Collection'
      
    />

    <FormInput
      type='text'
      name='tags'
      value={tags}
      placeholder={tags}
      onChange= {(e) => setTags(e.target.value)}
      label='tags'
      
    />
    <FormInput
      type='text'
      name='address'
      value={address}
      placeholder={address}
      onChange={(e) => setAddress(e.target.value)}
      label='address'
      
    />
    <FormInput
      type='text'
      name='city'
      value={city}
      placeholder={city}
      onChange={(e) => setCity(e.target.value) }
      label='city'
      
    />
    <FormInput
      type='text'
      name='country'
      value={country}
      placeholder={country}
      onChange={(e) => setCountry(e.target.value)}
      label='country'
      
    />
     <RadioButton  handleChange={setRole} />
    <ButtonsBarContainer>
      <CustomButton type="submit" >update</CustomButton>
      <CustomButton type="button" onClick={(e) => onSignProfil(e)}>Create Profil</CustomButton>
      <Message>
        
      </Message>
        
      </ButtonsBarContainer>
    </form>
    </ProfilContainer>
{/*  /**PRODUCT MANAGEMENT*/}  
  <CollectionContainer id="CollectionContainer">
      { (role === 'org') ?
      <ProductEdit  setCollection={setCollection} setTags={setTags} setProducts={setProducts}  /> : 
      <ProductsList />
      }
    </CollectionContainer>
  </MainContainer>
  
  )
}

const mapStateToProps = createStructuredSelector ({
  currentProfil: selectCurrentProfil,
  currentUser: selectCurrentUser,
  collection:selectCurrentCollection || 'hectic', 
  products:selectCurrentProducts || [],
  role: selectCurrentRole
  
})

const mapDispatchToProps = (dispatch) => ({
  createProduct:(product) => dispatch(addProductStart(product)),
  updateProduct:(product) => dispatch(updateProductStart(product)),
  getProfilDocument:(uid) => dispatch(getProfilDocument(uid)),
  updateProfil:(profil) => dispatch(updateProfilStart(profil)),
  signProfil:(profil) => dispatch(signProfilStart(profil))
})
const composedProfilProductPage = compose(
connect(mapStateToProps, mapDispatchToProps),
withRouter,
)(ProfilProductsPage)

export default composedProfilProductPage;
