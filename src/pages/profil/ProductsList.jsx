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
import CartDropDown from './../../components/Cart-Dropdown/Cart-Dropdown'
import withAuthorization from '../../components/WithAuthorization/withAuthorization.jsx';
import { ToastContainer, toast } from 'react-toastify';
import {SelectionTag, CollectionTag} from '../../components/Selec-item/Select-Item'
import 'react-toastify/dist/ReactToastify.css';


const  ProductEdit = ({profil,selections, history,  createProduct, updateProfil}) =>  {

  const initialSelections = {
    books:[ 'sagesse' ,'dogme', 'society'], 
    products: ['market','Ludique']   
  };
return(
      <AddProductContainer>
      <ProductContainer id="ProductContainer">
        <ProductTitle>Product List</ProductTitle>
          <CartDropDown />        
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
