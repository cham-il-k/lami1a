
import React from 'react'
import { Route } from 'react-router-dom';
import CollectionsOverviewContain from '../../components/Collections-Overview/Collections-Overview';
import CollectionPageContain from './../collectionPage/collectionPage';

const ShopPage =({match, fetchProductsStart}) => {
  
return (
  <div className='shop-page'>
    <Route exact path={`${match.url}`} render={(props) => 
    <CollectionsOverviewContain  {...props} />
    }/>
    <Route exact path={`${match.path}/:selectionId`} render={(props) => 
    <CollectionPageContain  {...props} />
    }/> 
  </div>
);
}


export default ShopPage;
