import React, { Component, } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import Selection from '../../components/Selection/Selection'
import About from '../about/about'
import CheckoutPage from '../checkout/checkout.jsx'
import ShopPage from '../shop/shop.jsx'
import CollectionPage from './../collectionPage/collectionPage';
import ProfilPage from '../profil/profil.jsx'
import Contact from '../contact/contact'
import {isEmpty} from './../../util/is-empty'
import SignUp from './../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn';
import  { selectCurrentProfil} from './../../store/selectors/profil'
import { MainContainer } from'./main-styled.jsx';
class MainPage extends Component {
    

    render() {
const { currentProfil} = this.props
return (
    <Switch>
        <MainContainer>
            <Route exact path='/' component= { Selection} />
            <Route exact path='/contact' component= {Contact} />
            <Route exact path='/signup' render={() => {
                return !isEmpty(currentProfil) ? (<Redirect to='/profil' />) : 
                (<SignUp/>)
                }
            }/>
            <Route exact path='/signin' render={ () => {
                return !isEmpty(currentProfil) ? (<Redirect to='/profil'/>) :
                (<SignIn />)
                }
            } />
            <Route extact path='/shop' component={ShopPage} />
            <Route exact path='/about' component= {About} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/profil' component={ProfilPage} />
            
            <Route exact path='/products/:collectionId' component={CollectionPage} />
        </MainContainer>
    </Switch>
)
    }
}
const mapStateToProps = createStructuredSelector ({
    currentProfil: selectCurrentProfil
}) 

export default withRouter(connect(mapStateToProps)(MainPage))
