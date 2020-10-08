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
import {auth} from './../../util/db/db'

const  ProductEdit = ({profil,collection, history, getProfilDocument, createProduct, updateProfil}) =>  {
  const initialSelec = [{ value: 'books', label: 'Books' },{ value: 'products', label: 'Products' }];
  const initialCollec = [{ value: 'sagesse', label: 'Sagesse' },{ value: 'dogme', label: 'Dogme' },
  { value: 'society', label: 'Society' }];
  
  const {email, collections, favourites, login, products } = profil
  const {title, description} = collection ? collection : {title:profil.login}
  const [credential, setCredential] = useState({email, collections, favourites, login, products })
  const [selec, setSelec] = useState()
  const [collec, setCollec] = useState();
const [product, setProduct] = useState({})
  //console.log({profilUID:profil.uid})
  
  const notify = (message) => toast(`${message}`);
  useEffect(() => {
//    console.log({currentUser:auth.currentUser})
  setCredential({...profil})
  return () => {
    }
}, [profil])
const handleSubmitProduct = async event => {
  event.preventDefault();
    try {
      
      //console.log({prodFin})
       createProduct({uid:profil.uid,product})
      notify(`${product.title} is registred`)
      history.push(`/profil`);
  }catch(error) {
    notify(`${error}` )
}
}
const handleChangeSelec = (selecOption) => {
  setSelec(selecOption)
 // console.log({selecOption},{product})
  setProduct({...product,selection:selecOption['value']})
  
} 

const handleChangeCollec = (collecOption) => {
  //console.log({collecOption},{product})
  setCollec(collecOption)
  setProduct({...product,collection:collecOption['value']})
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
   return (
   <FormInput
    type='text'
    name='collection'
    value={credential.collection}
    onChange={handleChangeProduct}
    label='Collection'
    required
  />)
}}

const handleFile = (event) => {
  event.stopPropagation()
  event.preventDefault() 
  const file = event.target.files[0]
  const {name, size} = file
  setProduct({...product,image: file})

}

const handleChangeProduct = (event ) => {
  const {value, name} = event.target
  setProduct({...product, [name]: value})
}
return(
      <AddProductContainer>
      <ProductContainer id="ProductContainer">
        <ProductTitle>Add Product</ProductTitle>
        <form  onSubmit={ handleSubmitProduct}>
          <SelectContainer>
        <Select
        value={selec}
        placeholder='select selection'
        onChange={handleChangeSelec}
        options={initialSelec}
      /> 
             </SelectContainer>

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
            min="0"
            label='Price'
            
            required
          />
        <SelectContainer>
        <Select
          value={collec}
          placeholder='select collection'
          onChange={handleChangeCollec}
          options={initialCollec}
        /> 
        </SelectContainer>
          
            <Message>
              Add image?
            </Message>
            <FileContainer>

            <input type="file" onChange={handleFile}  accept="image/*" required />
            </FileContainer>
          <ButtonsBarContainer>
          <CustomButton type="button" type='submit' > Create product</CustomButton>
            
            <CustomButton type="button" onClick={() => {}} > Update</CustomButton>
          </ButtonsBarContainer>
        </form>
      </ProductContainer>
    </AddProductContainer>
 )
}

const mapStateToProps = createStructuredSelector ({
  profil: selectCurrentProfil,
  collection:selectCurrentCollection || 'hectic', 
  products:selectCurrentProducts || []

})

const mapDispatchToProps = (dispatch) => ({
  createProduct:(product) => dispatch(addProductStart(product)),
  updateProduct:(product) => dispatch(updateProductStart(product)),
  getProfilDocument:(uid) => dispatch(getProfilDocument(uid)),
  updateProfil:(credential) => dispatch(updateProfilStart(credential))
})
const composedProductEdit = compose(
connect(mapStateToProps, mapDispatchToProps),
withAuthorization,
WithSpinner
)(ProductEdit)

export default composedProductEdit;
