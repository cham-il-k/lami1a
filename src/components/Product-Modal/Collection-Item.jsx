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

const CollectionItem = ({ collection, match, history}) => {
  const { title, dispo, imageUrl } = collection;
  console.log(`match dans CollectioItem ${JSON.stringify(match)}`)

  return (
    <CollectionItemContainer onClick={() => history.push(`${match['url']}/${title}`)}>
      <LinkProduct to={`${match['url']}/${title}`}>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{title}</NameContainer>
          <PriceContainer>{dispo}</PriceContainer>
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
