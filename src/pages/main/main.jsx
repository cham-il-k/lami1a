import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import shopPage from '../shop/shop.jsx'
import ProductRoute from './../productsPage/productsRoute';
import ProfilProductsPage from '../profil/profil.jsx'
import ComposedProfilMessages from '../profil/profilMessages.jsx'
import Spinner from './../../components/Spinner/Spinner'
import Selection from './../../components/Selection/Selection'
import {isEmpty} from '../../util/validators'
import SignUpContain from './../../components/SignUp/SignUp'
import SignInContain from '../../components/SignIn/SignIn';
import {checkProfilSession} from './../../store/actions/profil'
import  { selectCurrentProfil} from './../../store/selectors/profil'
import { MainContainer } from'./main.styled';
import {auth} from './../../util/db/db'
import ErrorBoundary from './../../components/ErrorBoundary/ErrorBoundary'

const LazyContact = lazy(() => {
    return import('../contact/contact')
})

const LazyAbout = lazy(() => {
    return import('./../about/about')
})

const LazyCheckoutPage = lazy(() => {
    return import('./../checkout/checkout.jsx')
}
)
const MainPage = ({ currentProfil, checkProfilSession}) => {
    useEffect(() => {
        checkProfilSession()
       }, [checkProfilSession]) 
      
      
    useEffect(() => {
        const getUser  = auth.currentUser
        if(!!getUser) {
            console.log({main:getUser.email})
        }
        return () => {
            return
        }
    }, [])

return (
    <Switch>
        <MainContainer>
            <ErrorBoundary>

            <Route exact path='/' component= { Selection} />

            
            <Route extact path='/shop' component={shopPage} />
            
            <Suspense fallback={() => (<Spinner />)}>
            <Route exact path='/signup' render={() => {
                console.log({currentProfil})  
                return isEmpty(currentProfil) ? (<SignUpContain/>) : <Redirect to='/'/>
            }
        }/>    
            <Route exact path='/signin' render={ () => {
                if(!isEmpty(currentProfil))  console.log(currentProfil.email)  
                return isEmpty(currentProfil) ?  (<SignInContain />): <Redirect to='/'/>
            }
            } />
            <Route exact path='/profil' component={ProfilProductsPage} />
            <Route exact path='/messages' component={ComposedProfilMessages} />
            <Route exact path='/contact' component= {LazyContact} />
            <Route exact path='/about' component= {LazyAbout} />
            <Route exact path='/checkout' component={LazyCheckoutPage} />
            <Route exact path='/products' component={ProductRoute} />
            </Suspense>
            </ErrorBoundary>
        </MainContainer>
    </Switch>
)
    }

const mapStateToProps = createStructuredSelector ({
    currentProfil: selectCurrentProfil
})
const mapDispatcToProps = (dispatch) => ({
  checkProfilSession: () => dispatch(checkProfilSession()),

})


export default withRouter(connect(mapStateToProps, mapDispatcToProps)(MainPage))
