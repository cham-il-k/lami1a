import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { HomeContainer } from './home-styled'
import Selection from '../../components/Selection/Selection'
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
    state = {
        error: false,
        loading: false
    }
    componentDidMount() {
    }
    render() {
            return (
                <HomeContainer>
                    <Link to="/signup"> You are not signed up ?</Link>
                    <Selection />

                </HomeContainer>
            )
        }
    }
const mapStateToProps = ({ profil:{currentProfil} }) => {
    return {
        currentProfil
    }
}
export default withRouter(connect(mapStateToProps, null)(HomePage));