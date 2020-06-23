import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import WithSpinner from './../../components/With-Spinner/With-Spinner'
import {compose} from 'redux'
import CollectionItem from '../../components/Collection-Item/Collection-Item';
import moduleName from 'module'
import { selectProductsCollection } from '../../store/selectors/selection';
import { fetchProducts  } from './../../store/actions/selection'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';

const CollectionPage = ({ products ,match, history }) => {
let collection = []  
products.forEach(col => {
  console.log({col})
  collection = (<>
        <CollectionTitle>{` ${col['selection']} / ${col['collection']}` }</CollectionTitle>
                <CollectionItemsContainer>
                  {(col['items']).map(item => (
                    <CollectionItem key={item['id']} collection={item} />
                  ))}
                </CollectionItemsContainer>
          </>)
    })

return (
  <CollectionPageContainer>
    {collection}
  </CollectionPageContainer>
);
};
  

const mapStateToProps =  (state, ownProps) => createStructuredSelector({
    products : selectProductsCollection(ownProps.match.params.selectionId)
 }) 
const CollectionPageContain = compose(
  connect(mapStateToProps),
  WithSpinner)(CollectionPage)

  export default CollectionPageContain;
