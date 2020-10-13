import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authenticated } from '../../store/selectors/profil'
import { createStructuredSelector} from 'reselect'
export default function withAuthorization(ComposedComponent){

const Autenticated =({authenticated, ...rest}) =>  {
            
            return authenticated ? <ComposedComponent {...rest} /> : <Redirect to='/signin' />
        }
    
const  mapStateToProps = createStructuredSelector({

        authenticated: authenticated 

})
return connect(mapStateToProps)(Autenticated)
}
