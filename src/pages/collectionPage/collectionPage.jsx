import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection-Item/Collection-Item';

import { selectProductsCollection } from '../../store/selectors/selection';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection-styled';

const CollectionPage = ({ products ,match, history }) => {
  console.log(products)  
  var collection; 
  products.forEach(selection => {
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

const mapStateToProps = (state, ownProps) => {
 const collectionId =  ownProps.match.params.collectionId
 //const selectionId =  ownProps.match.params.selectionId
 return{
  products: selectProductsCollection(collectionId)(state)
}};

export default connect(mapStateToProps)(CollectionPage);
