import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';
import  { withRouter} from 'react-router-dom'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  LinkProduct,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styled';

const CollectionItem = ({ product, match, history,urlName}) => {
  const {  name,   imageUrl, price } = product;
  //console.log(match)
  
  //console.log({match, history, collection})
  return (
    <CollectionItemContainer id="CollectionItemContainer" onClick={() => history.push(`/products/${urlName}`)}>
      <LinkProduct to={`/products/${urlName}`}>
      <FontAwesomeIcon icon={faStar} />
        <BackgroundImage className='image' imageUrl={`/assets${imageUrl}`} />
        <CollectionFooterContainer id="CollectionFooterContainer">
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
      </LinkProduct>
      
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addItem(product))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(CollectionItem));
