
import React,{lazy, Suspense} from 'react'
import { Route } from 'react-router-dom';
import CollectionsOverviewContain from '../../components/Collections-Overview/Collections-Overview';
import CollectionPageContain from './../collectionPage/collectionPage';
import ProductsCollectionPage from './../productsPage/productsCollectionPage'
import Spinner from './../../components/Spinner/Spinner'
const shopPage =({match, fetchProductsStart}) => {

const LazyCollectionsOverviewContain = lazy(() => {
    return import('../../components/Collections-Overview/Collections-Overview')
})

const LazyCollectionPageContain = lazy(() => {
  return import('./../collectionPage/collectionPage')
})

const LazyProductsCollectionPage = lazy(() => {
  return import('./../productsPage/productsCollectionPage')
})
return (

<div  id='shop-page'>
  <Suspense fallback={() => (<Spinner />)}>
    
      <Route exact path={`${match.url}`} render={(props) => 
      <LazyCollectionsOverviewContain  {...props} />
      }/>
      <Route exact path={`${match.path}/:selectionId`} render={(props) => 
      <LazyCollectionPageContain  {...props} />
      }/>
      <Route exact path={`${match.path}/:selectionId/:collectionId`} render={(props) => 
      <LazyProductsCollectionPage  {...props} />
      }/> 
  </Suspense>  
</div>
);
}


export default shopPage;
