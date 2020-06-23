import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector} from 'reselect'
import { isEmpty} from './../../util/is-empty'
import {selectCurrentProfil, 
      selectCurrentCollection, selectCurrentroducts} from '../../store/selectors/profil'
import { ProfilContainer ,Message, ButtonsBarContainer, ProfilTitle} from './profil.styled'
import {FileContainer, CollectionTitle, ProductTitle, 
  AddProductContainer,SelectContainer,ProductContainer,} from './collection.styled'
import {addProductStart} from './../../store/actions/selection'
import  FormInput from '../../components/FormInput/FormInput' 
import CustomButton  from '../../components/CustomButton/CustomButton' 
import { MainContainer, CollectionContainer } from './profil.styled';
import withAuthorization from '../../components/WithAuthorization/withAuthorization.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WithSpinner from '../../components/With-Spinner/With-Spinner';


const  ProfilProductsPage = ({profil, currentProfil, collection, products, history, createProduct}) =>  {

 const {title,description} = collection ? collection : {title:profil.login}
const [credential, setCredential] = useState({profil})
const [product, setProduct] = useState({collection:''})
console.log({profil})

const notify = (message) => toast(`${{message}}`);

const handleSubmitProfil = async event => {
  event.preventDefault();
    try {
      notify(`${credential} is connected`)
      history.push(`/profil`);
  }catch(error) {
    notify(`${error}` )
}
}

const handleSubmitProduct = async event => {
  event.preventDefault();
    try {
      console.log({product})
      createProduct({product})
      notify(`${{product}} is registred`)
      
      history.push(`/profil`);
  }catch(error) {
    notify(`${error}` )
}
}
const ProductsSelectionTag = () => {
 if(!isEmpty(products)){
   return (
    <SelectContainer>
      <select name='products' defaultValue={product.collection} label='products'>
        {products.map( prod => (
          <option value= {product }>{product}</option>
      ))}
      </select>
    </SelectContainer>)
 }else {
   return (<FormInput
    type='text'
    name='collection'
    value={profil.collection}
    onChange={handleChangeProduct}
    label='Collection'
    required
  />)
}}

const handleFile = (event) => {
  event.stopPropagation()
  event.preventDefault() 
  const myFile = event.target.files[0]
  const {name, size} = myFile
  setProduct({...product,...{ image: name}})
  console.log(name)
}
const handleChangeProfil = (event ) => {
  const {value, name} = event.target
  const moncred = {[name]: value}
  setCredential({...credential, ...moncred})
}

const handleChangeProduct = (event ) => {
  const {value, name} = event.target
  const monprod = {[name]: value}
  setProduct({...product, ...monprod})
}
return(
  <MainContainer>
 <ProfilContainer>
   <ToastContainer />
  <ProfilTitle>Profil</ProfilTitle>
  <form  onSubmit={handleSubmitProfil}>
    <FormInput
      type='text'
      name='login'
      value={credential.login}
      onChange={handleChangeProfil}
      label='Login'
      required
    />
    <FormInput
      type='email'
      name='email'
      value={credential.email}
      onChange={handleChangeProfil}
      label='Email'
      required
    />
    <FormInput
      type='text'
      name='address'
      value={credential.address}
      onChange={handleChangeProfil}
      label='address'
      required
    />
    
    <FormInput
      type='text'
      name='city'
      value={credential.city}
      onChange={handleChangeProfil}
      label='city'
      required
    />
    <FormInput
      type='text'
      name='country'
      value={credential.country}
      onChange={handleChangeProfil}
      label='country'
      required
    />
    </form>
    < ButtonsBarContainer>
      <CustomButton type='submit'>update</CustomButton>
      <Message>
        
      </Message>
        <CustomButton link='link' to='/signin' > Create product</CustomButton>
      </ButtonsBarContainer>
    </ProfilContainer>
{ /**PRODUCT MANAGEMENT*/}
  <CollectionContainer>
    <CollectionTitle>{title}</CollectionTitle>
      <AddProductContainer>
      <ProductContainer>
        <ProductTitle>Add Product</ProductTitle>
        <form  onSubmit={ handleSubmitProduct}>
            {ProductsSelectionTag()}
          <FormInput
            type='text'
            name='title'
            value={product.title}
            onChange={handleChangeProduct}
            label='Title'
            required
          />
          
          <FormInput textarea
              rows="5" cols="33"
              name='description'
              value={product.description}
              onChange={handleChangeProduct}
              label='Description'
              required
          />
          <FormInput
            type='number'
            name='price'
            value={product.price}
            onChange={handleChangeProduct}
            label='Price'
            required
          />
        <SelectContainer>
          <select name='collection' defaultValue={product.collection} label='collection'>
            <option value="dogm">dogme</option>
            <option value="wise" >sagesse</option>
            <option value="socio">sociologie</option>
          </select>
        </SelectContainer>
          <SelectContainer>
            <Message>
              Add image?
            </Message>
            <FileContainer>

            <input type="file" onChange={handleFile}  accept="image/*" required />
            </FileContainer>
          </SelectContainer>
          <ButtonsBarContainer>
            <CustomButton type="button" type='submit'>Add</CustomButton>
            <CustomButton type="button" onClick={() => {}} > Update</CustomButton>
          </ButtonsBarContainer>
        </form>
      </ProductContainer>
    </AddProductContainer>
    </CollectionContainer>
  </MainContainer>
  
  )
}

const mapStateToProps = createStructuredSelector ({
  profil: selectCurrentProfil,
  collection:selectCurrentCollection || 'preso', 
  products:selectCurrentroducts || []

})

const mapDispatchToProps = (dispatch) => ({
  createProduct:(product) => dispatch(addProductStart(product))

})


const composedProfilProducts = compose(
connect(mapStateToProps, mapDispatchToProps),
withAuthorization,
WithSpinner
)(ProfilProductsPage)

export default composedProfilProducts;
