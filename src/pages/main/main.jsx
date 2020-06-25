import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import Selection from '../../components/Selection/Selection'
import About from '../about/about'
import CheckoutPage from '../checkout/checkout.jsx'
import shopPage from '../shop/shop.jsx'
import productsPage from './../productsPage/productsPage';
import composedProfilProducts from '../profil/profilProducts.jsx'
import composedProfilMessages from '../profil/profilMessages.jsx'
//import composedProfilProducts from '../profil/ProfilCollection'

import Contact from '../contact/contact'
import {isEmpty} from './../../util/is-empty'
import SignUp from './../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn';
import  { selectCurrentProfil} from './../../store/selectors/profil'
import { MainContainer } from'./main.styled';

const MainPage = ({ currentProfil}) => {

return (
    <Switch>
        <MainContainer>
            <Route exact path='/' component= { Selection} />
            <Route exact path='/contact' component= {Contact} />
            <Route exact path='/signup' render={() => {
                console.log({currentProfil})  

                return isEmpty(currentProfil) ? (<SignUp/>) : <Redirect to='/'/>
            }
        }
        />    
            <Route exact path='/signin' render={ () => {
                if(!isEmpty(currentProfil))  console.log(currentProfil.email)  
                
                return isEmpty(currentProfil) ?  (<SignIn />): <Redirect to='/'/>
            }
        } />
            <Route exact path='/profil' component={composedProfilProducts} />
            <Route exact path='/messages' component={composedProfilMessages} />
            
            <Route extact path='/shop' component={shopPage} />
            <Route exact path='/about' component= {About} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/products/:productSlug' component={productsPage} />
        </MainContainer>
    </Switch>
)
    }

const mapStateToProps = createStructuredSelector ({
    currentProfil: selectCurrentProfil
}) 

export default withRouter(connect(mapStateToProps)(MainPage))
