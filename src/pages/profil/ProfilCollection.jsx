import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';

import { selectProfilCollection } from '../../store/selectors/profil';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';

const ProfilCollectonPage = ({ collection ,match, history }) => {
     const { title, products} =collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {products.map(product => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectProfilCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(ProfilCollectonPage);
