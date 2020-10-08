
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ProductsPageContain from './productsPage';
import ProductPageContain from './productPage';

const ProductRoute =({match, fetchProductsStart}) => {
  
return (
   <Switch>
    <Route exact path={`${match.url}`} render={(props) => 
    <ProductsPageContain   {...props} />
    }/>
    <Route exact path={`${match.path}/:nameSlug`} render={(props) =>
      ( <ProductPageContain  {...props} />)} />
  </Switch>
);
}


export default ProductRoute;