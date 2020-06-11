import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';

import { selectProductsCollection } from '../../store/selectors/selection';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './products-styled';

const CollectionPage = ({ sel ,match, history }) => {
  var collection; 
  sel.forEach(selection => {
    collection = <>
          <CollectionTitle>{selection['title']}</CollectionTitle>
                  <CollectionItemsContainer>
                    {Object.values(selection['collections']).map(collection => (
                      <CollectionItem key={collection['id']} collection={collection} />
                    ))}
                  </CollectionItemsContainer>
            </>
              })

  return (
    <CollectionPageContainer>
      {collection}
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  products: selectProductsCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
