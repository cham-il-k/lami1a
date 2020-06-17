import React, {useState} from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';
import {createStructuredSelector} from 'reselect'
import { selectCurrentProfil, selectProfilCollection} from './../../store/selectors/profil'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection-styled';
import { ButtonsBarContainer,  addProductContainer,selectContainer,
  collectionContainer, collectionTitle, Message } from './profilCollection-styled'
import FormInput from './../../components/FormInput/FormInput'
import CustomButton from './../../components/CustomButton/CustomButton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const   ProfilCollectonPage =( ) => {
const [collection, setCollection] = useState({features:'',loading:false, product:'', image:''})
const notify = (message) => toast(`${message}`);

const  handleSubmit = async event => {
  const {setCurrentProfil, match, history} = this.props
  event.preventDefault();
    const {collection,loading, product,image} = collection;
   notify ('password and confirmed Fail', { appearance: 'error' })
    }
      
const handleFile = (event) => {
  event.stopPropagation()
  event.preventDefault() 
  const image = event.target.files[0]
}
const  handleChange = event => {
    const { name, value } = event.target;
    setCollection({...collection, [name] : value });
  };
  const { features} = collection
  const { title, products, price, description, } = collection.features
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {features.map(product => (
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

const mapStateToProps = (ownProps) => createStructuredSelector ({
  
})

export default connect(mapStateToProps)(ProfilCollectonPage);
