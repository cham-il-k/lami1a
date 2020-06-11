import React, {Component} from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';
import {createStructuredSelector} from 'reselect'
import { setCurrentProfil } from '../../store/actions/profil';
import {selectCurrentProfil, selectProfilCollection} from './../../store/selectors/profil'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection-styled';
import { ButtonsBarContainer, 
  addProductContainer,selectContainer,
  collectionContainer, collectionTitle, Message } from './profilCollection-styled'
import FormInput from './../../components/FormInput/FormInput'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { createUserProfilDocument} from './../../util/db/auth.firebase'
import { auth, firestore } from './../../util/db/db'
import CustomButton from './../../components/CustomButton/CustomButton'
import { storageRef, storeImageRef } from './../../util/db/db'
  class  ProfilCollectonPage extends Component {
  
    state = {

    }

    handleSubmit = async event => {
      const {setCurrentProfil, match, history} = this.props
      const { addToast } = useToasts()
      event.preventDefault();
       const { login, email, password, confirmPassword } = this.state;
      if (password !== confirmPassword) {
        return addToast('password and confirmed Fail', { appearance: 'error' })
       }
      try {
         auth.createUserWithEmailAndPassword(
          email,
          password
        ).then(userRef => {
          createUserProfilDocument(userRef.data(), { login }).then(
            userRefdb =>  {
              userRefdb.onSnapshot(snapshot => {
                setCurrentProfil({
                  id: snapshot.id,
                  ...snapshot.data()
                })
              })
              history.push('/')
            return addToast('Saved Successfully', { appearance: 'success' })
            })})
          } catch (error) {
        return   addToast(error.message, { appearance: 'error' })
    }
    };

handleFile = (event) => {
  event.stopPropagation()
  event.preventDefault() 
  const file = event.target.files[0]
  const metadata = {'contentType': file.type}
  storageRef.child(`selectionGallery/${file.name}`).put(file, metadata).then(snapshot => {
    const messageByteTransfered = snapshot.byteTransfered
     const  uploaded =  snapshot.totalBytes
      const snapshhorDownload =  snapshot.ref.getDownloadURL().then(url => {

  //      storeImageRef(auth.currentProfil,url, file.name)
      })
    })
  }



  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name] : value });
  };
  render(){
    const { title, products, price, description, } = this.props.collection
    return (
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {products.map(product => (
            <CollectionItem key={product.id} product={product} />
          ))}
        </CollectionItemsContainer>
        <addProductContainer>
        <productContainer>
          <productTitle>Add Product</productTitle>
          <form  onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='title'
              value={title}
              onChange={this.handleChange}
              label='Title'
              required
            />
            <FormInput
              type='text'
              name='description'
              value={description}
              onChange={this.handleChange}
              label='Description'
              required
            />
            <FormInput
              type='number'
              name='price'
              value={price}
              onChange={this.handleChange}
              label='Price'
              required
            />
          <selectContainer>
            <select name='collection' label='collection'>
              <option value="dogme">dogme</option>
              <option value="sagesse" selected>sagesse</option>
              <option value="sociologie">sociologie</option>
            </select>
          </selectContainer>
            <selectContainer>
              <Message>
                Add image?
              </Message>
              <input type="file" onChange={this.handleFile} required value='...galley image'/>
            </selectContainer>
            <ButtonsBarContainer>
              <CustomButton type='submit'>Add</CustomButton>
              
                <CustomButton onClick={() => {}} > Edit</CustomButton>
            </ButtonsBarContainer>
          </form>
        </productContainer>
      </addProductContainer>
      </CollectionPageContainer>
    );
  }
}
const mapStateToProps = (ownProps) => createStructuredSelector ({
  profil: selectCurrentProfil,
  collection: selectProfilCollection(ownProps.match.params.collectionId)

})
const mapDispatchToProps = (dispatch) => {
return {
  setCurrentProfil: (profil) => dispatch(setCurrentProfil(profil))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilCollectonPage);
