import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentProfil, selectProfilCollection} from './../../store/selectors/profil'

import ProfilCollectonPage from './ProfilCollection';
import { ProfilContainer ,Message, ButtonsBarContainer, ProfilTitle} from './profil-styled'
import  FormInput from './../../components/FormInput/FormInput' 
import CustomButton  from './../../components/CustomButton/CustomButton' 

class ProfilPage extends Component   {

  render() {
    const { login, email, password, city, country, address} = this.props.profil

    return(
     <ProfilContainer>
      <ProfilTitle>Profil</ProfilTitle>
      <form  onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='login'
          value={login}
          onChange={this.handleChange}
          label='Login'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
          label='Password'
          required
        />
        <FormInput
          type='text'
          name='address'
          value={address}
          onChange={this.handleChange}
          label='Confirm Password'
          required
        />
        
        <FormInput
          type='text'
          name='city'
          value={city}
          onChange={this.handleChange}
          label='Confirm Password'
          required
        />
        <FormInput
          type='text'
          name='country'
          value={country}
          onChange={this.handleChange}
          label='Confirm Password'
          required
        />
        </form>
        < ButtonsBarContainer>
          <CustomButton type='submit'>SIGN UP</CustomButton>
          <Message>
            Already User?
          </Message>
            <CustomButton link='link' to='/signin' > SIGNIN</CustomButton>
          </ButtonsBarContainer>
        </ProfilContainer>

      )
    
    
  }

}

const mapStateToProps = createStructuredSelector ({
  profil: selectCurrentProfil
})

export default connect(mapStateToProps )(ProfilPage);

