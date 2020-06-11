import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

import ProductItem from '../../components/Product-Item/Product-Item';

//import { selectSelectionForShopCollection } from '../../store/selectors/selection';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './product-styled';

class ProductPage extends Component {

  render(){
    const { match,history,selection } = this.props
    const _sel = []
     selection.forEach(sel => {
      _sel.push(sel)
    }) 
    const col = match.params['collectionId']
    const products = _sel[0]['collections'][col]['items']
      console.log(products)
      return (
        <CollectionPageContainer>
          <CollectionTitle>Bismi ALLAH</CollectionTitle>
          <CollectionItemsContainer>
            { products.map(product => (
                <ProductItem key={product.id} product={product} />
              ))} 
          </CollectionItemsContainer>
        </CollectionPageContainer>
              );
            }
}  


const mapStateToProps = (state, ownProps) => {
   return{
//  selection: selectSelectionForShopCollection(ownProps.match.params['selectionId'])(state)
}
};

export default (withRouter(connect(mapStateToProps)(ProductPage)));
