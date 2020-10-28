import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector} from 'reselect'
import { isEmpty} from '../../util/validators'
import {selectCurrentProfil, selectCurrentCollection, selectCurrentProducts} from '../../store/selectors/profil'
import {selectSelections, selectSelectionsLabel, selectSelectionCollections} from '../../store/selectors/selection'
import { ProfilContainer ,Message, ButtonsBarContainer, ProfilTitle} from './profil.styled'
import {FileContainer, CollectionTitle, ProductTitle, 
  AddProductContainer,SelectContainer,ProductContainer,} from './collection.styled'
import {addProductStart,updateProductStart, setCollectionsSelection, setSelectionCollections} from '../../store/actions/selection'
import {updateProfilStart, getProfilDocument } from '../../store/actions/profil'
import  FormInput from '../../components/FormInput/FormInput' 
import CustomButton  from '../../components/CustomButton/CustomButton' 
import { MainContainer, CollectionContainer } from './profil.styled';
import withAuthorization from '../../components/WithAuthorization/withAuthorization.jsx';
import { ToastContainer, toast } from 'react-toastify';
import {SelectionTag, CollectionTag} from '../../components/Selec-item/Select-Item'
import 'react-toastify/dist/ReactToastify.css';


const  ProductEdit = ({profil,selections, history,  createProduct, updateProfil}) =>  {

  const initialSelections = {
    books:[ 'sagesse' ,'dogme', 'society'], 
    products: ['market','Ludique']   
  };
  const [selection, setSelection] = useState([])
  const [selects, setSelections] = useState([])
  const [collections, setCollections] = useState([])
  const [collection, setCollection] = useState();
  const [product, setProduct] = useState({title:'',description:'', price:'', image:'', collection:'',selection:''})

  const handleSubmitProduct = async event => {
  event.preventDefault();
    try {
      createProduct({uid:profil.uid,product})
      history.push(`/profil`);
  }catch(error) {
    console.log({error})
}
}
const handleChangeSelection = (selection) => {
  console.log({selection})
  setProduct({...product,selection})
  setCollections(initialSelections[selection])
} 

const handleChangeCollection = (collection) => {
  console.log({collection})
  setProduct({...product,collection:collection})
} 

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
const updateProduct=() => {
 
  try {
    updateProduct({uid:profil.uid,product})
    history.push(`/profil`);
}catch(error) {
console.log({error})
  }
}
return(
      <AddProductContainer>
      <ProductContainer id="ProductContainer">
        <ProductTitle>Product List</ProductTitle>
        
      </ProductContainer>
    </AddProductContainer>
 )
}

const mapStateToProps = (state, ownProps) => createStructuredSelector ({
  profil: selectCurrentProfil,
  selections:selectSelections || ['books','products'],
  //collections:selectSelectionCollections(ownProps['selection']) || ['dogme', 'sagesse', 'society'] ,
  products:selectCurrentProducts || [],
  
})

const mapDispatchToProps = (dispatch) => ({
  createProduct:(product) => dispatch(addProductStart(product)),
  updateProduct:(product) => dispatch(updateProductStart(product)),
  //setCollectionsSelection:(selection) => dispatch(setCollectionsSelection(selection)),
  getProfilDocument:(uid) => dispatch(getProfilDocument(uid)),
  updateProfil:(credential) => dispatch(updateProfilStart(credential))
})
const composedProductEdit = compose(
connect(mapStateToProps, mapDispatchToProps),
withAuthorization,
)(ProductEdit)

export default composedProductEdit;
