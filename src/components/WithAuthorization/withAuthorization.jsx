import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authenticated } from '../../store/selectors/profil'
import { createStructuredSelector} from 'reselect'
export default function withAuthorization(ComposedComponent){

    class Autenticated extends Component {
        render() {
          const   {authenticated, dispatch, ...rest} = this.props 
            
            return authenticated ? <ComposedComponent {...rest} /> : <Redirect to='/signin' />
        }
    }
const  mapStateToProps = createStructuredSelector({

        authenticated: authenticated 

})
return connect(mapStateToProps)(Autenticated)
}
