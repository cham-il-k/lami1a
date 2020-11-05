import React, { useEffect, lazy, Suspense, Profiler } from 'react';
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
import ContactModal from './../../components/Contact-Modal/ContactModal'
import SignUpContain from './../../components/SignUp/SignUp'
import SignInContain from '../../components/SignIn/SignIn';
import {checkProfilSession, isAuthenticatedFail, setCurrentProfil, checkCurrentUser} from './../../store/actions/profil'
import  { selectCurrentProfil, selectCurrentUser} from './../../store/selectors/profil'
import  {apiGetCurrentProfil} from './../../store/api/profils'
import { MainContainer } from'./main.styled';
import {auth} from './../../util/db/db'
import ErrorBoundary from './../../components/ErrorBoundary/ErrorBoundary'
//import { checkCurrentUser } from '../../store/sagas/profil.js';

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
const MainPage = ({ currentUser, checkCurrentUser,  currentProfil, checkProfilSession}) => {
    useEffect(() => {
        checkCurrentUser()
    }, []) 

useEffect(() => {
console.log({currentUser})
}, [currentUser]) 

      

return (
    <Switch>
        <MainContainer>
            <ErrorBoundary>
                {/* <Profiler id="mainProfiler" onRender={(id, phase, actualDuration) => {
                    console.log({id, phase, actualDuration})
                } }>
                 */}
            <Route exact path='/' component= { Selection} />
            
            <Route extact path='/shop' component={shopPage} />
            
            <Suspense fallback={<Spinner />}>
            <Route exact path='/signup' render={() => {
                console.log({currentUser})  
                return isEmpty(currentUser) ? (<SignUpContain/>) : <Redirect to='/'/>
            }
            }/>    
            <Route exact path='/signin' render={ () => {
                if(!isEmpty(currentUser))  console.log(currentProfil.email)  
                return isEmpty(currentUser) ?  (<SignInContain />): <Redirect to='/'/>
            }
            } />
            <Route exact path='/profil' render={ () => {
                return !isEmpty(currentUser) ?  (<ProfilProductsPage />): <Redirect to='/signup'/>
            }}/>

            <Route exact path='/messages' render={ () => {
                            return !isEmpty(currentUser) ?  (<ComposedProfilMessages/>): <Redirect to='/signup'/>
                        }}/>

            <Route exact path='/contact' render={ () => {
                return !isEmpty(currentUser) ?  (<ContactModal isOpen={true} /> ): <Redirect to='/signup'/>
            }}/>
            
            <Route exact path='/about' component= {LazyAbout} />
            <Route exact path='/checkout' component={LazyCheckoutPage} />
            {/* <Route exact path='/products' component={ProductRoute} />
             */}
             </Suspense>
            </ErrorBoundary>
        </MainContainer>
    </Switch>
)
    }

const mapStateToProps = createStructuredSelector ({
    currentProfil: selectCurrentProfil,
    currentUser: selectCurrentUser

})
const mapDispatcToProps = (dispatch) => ({
   checkProfilSession: () => dispatch(checkProfilSession()),
   checkCurrentUser: () => dispatch(checkCurrentUser()),
   setCurrentProfil : (profil) => dispatch(setCurrentProfil(profil)),  
   isAuthenticatedFail: (error) => dispatch(isAuthenticatedFail(error)) 
})


export default withRouter(connect(mapStateToProps, mapDispatcToProps)(MainPage))
