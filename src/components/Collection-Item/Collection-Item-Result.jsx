import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';
import  { withRouter} from 'react-router-dom'
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  LinkProduct,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styled';

const CollectionItem = ({ collection, match, history,...otherProps}) => {
  const { id, name ,edition, imageUrl, price ,desc ,tags } = collection;
 console.log({match, history, collection})
  return (
    <CollectionItemContainer onClick={() => history.push(`${match['url']}/${name}`)}>
      <LinkProduct to={`/products/${name}`}>
        <BackgroundImage className='image' imageUrl={`/assets${imageUrl}`} />
        <CollectionFooterContainer>
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
