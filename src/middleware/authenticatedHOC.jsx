import React, {Component} from 'react'

export default function(ComposedComponent){
    class Autenticated extends Component {
        render() {
            return <ComposedComponent {...this.props} />
        }
    }
function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    }
}
return connect(mapStateToProps(Autenticated))
}
