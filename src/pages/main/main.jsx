import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import Selection from '../../components/Selection/Selection'
import About from '../about/about'
import CheckoutPage from '../checkout/checkout.jsx'
import shopPage from '../shop/shop.jsx'
import ProductRoute from './../productsPage/productsRoute';
import ProfilProductsPage from '../profil/profil.jsx'
import composedProfilMessages from '../profil/profilMessages.jsx'
//import composedProfilProducts from '../profil/ProfilCollection'

import Contact from '../contact/contact'
import {isEmpty} from '../../util/validators'
import SignUpContain from './../../components/SignUp/SignUp'
import SignInContain from '../../components/SignIn/SignIn';
import  { selectCurrentProfil} from './../../store/selectors/profil'
import { MainContainer } from'./main.styled';
import {auth} from './../../util/db/db'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainPage = ({ currentProfil}) => {
    const notify = (message) => toast(`${message}`);
    useEffect(() => {
        const getUser  = auth.currentUser
        if(!!getUser) {
            console.log({getUser})
        }
        return () => {
            return
        }
    }, [])

return (
    <Switch>
        <MainContainer>
          <ToastContainer/>
            <Route exact path='/' component= { Selection} />
            <Route exact path='/contact' component= {Contact} />
            <Route exact path='/signup' render={() => {
                console.log({currentProfil})  

                return isEmpty(currentProfil) ? (<SignUpContain/>) : <Redirect to='/'/>
            }
        }
        />    
            <Route exact path='/signin' render={ () => {
                if(!isEmpty(currentProfil))  console.log(currentProfil.email)  
                return isEmpty(currentProfil) ?  (<SignInContain />): <Redirect to='/'/>
            }
        } />
            <Route exact path='/profil' component={ProfilProductsPage} />
            <Route exact path='/messages' component={composedProfilMessages} />
            
            <Route extact path='/shop' component={shopPage} />
            <Route exact path='/about' component= {About} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/products' component={ProductRoute} />
        </MainContainer>
    </Switch>
)
    }

const mapStateToProps = createStructuredSelector ({
    currentProfil: selectCurrentProfil
}) 

export default withRouter(connect(mapStateToProps)(MainPage))
