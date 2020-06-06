
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/Collections-Overview/Collections-Overview';
import CollectionPage from '../collection/collection';
import ProductPage from '../product/product';
import React, { Component } from 'react'
import { auth, firestore} from './../../util/db/db'
import 'firebase/auth'
import {connect} from 'react-redux'
//import { fetchCollectionsStart } from './../../store/actions/shop'
class ShopPage extends Component {
  
  unsubscribeFromSnapshot = null

  componentDidMount() {
  }
    render() {
        const {
          match
        } = this.props
        return (
          <div className='shop-page'>
            <Route exact path={`${match.url}`} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:selectionId`} component={CollectionPage} />
            <Route exact path={`${match.path}/:selectionId/:collectionId`} component={ProductPage} />
          </div>
        );
  }
}
const mapDispatchToProps = dispatch => ({
  //fetchCollectionsStart:() => dispatch(fetchCollectionsStart())
  
  })

export default connect(null, mapDispatchToProps)(ShopPage);
