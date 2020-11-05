import React, { useState} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { compose } from 'redux'
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { createStructuredSelector } from 'reselect'
import LogoBox from './../Logo/Logo'
import { selectCurrentProfil, selectCurrentUser } from '../../store/selectors/profil';
import { selectCartHidden } from '../../store/selectors/cart';
import {isEmpty} from '../../util/validators'
import { logOutStart } from './../../store/actions/profil'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  ToggleButton
} from './header-styled';
const Header = ({ currentProfil,currentUser, hidden, logOutStart }) => {
  const [toggle, setToggleMenu] =useState(false)  
  return (
      <HeaderContainer>
        {
        toggle ? 
          <ToggleButton onClick={() => setToggleMenu(false)}>&#9776;</ToggleButton>
          :
          <>
        <LogoContainer to='/'>
          <LogoBox className='logo' />
        </LogoContainer>
        <OptionsContainer>
          { (!isEmpty(currentUser) || !isEmpty(currentProfil) ) ? (
           <>
           <OptionLink to='/profil'>Profil</OptionLink>
           <OptionLink to='/collection'>Collection</OptionLink>
           <OptionLink to='/messages'>Messages</OptionLink>
          
           <OptionLink to='/contact'>CONTACT</OptionLink>
        </>): (<></>)
          }<OptionLink to='/shop'>SHOP</OptionLink>
          { 
           !isEmpty(currentUser) && !isEmpty(currentProfil) ? (
           
          <OptionLink to='/' onClick={logOutStart}>
              SIGN OUT
          </OptionLink>
          
          ): (
            <OptionLink to='/signup'>SIGN in/up </OptionLink>
            
            )}
              <CartIcon />
        </OptionsContainer>
        
      </>
      }  
      </HeaderContainer>
    );

  }
 const mapStateToProps = createStructuredSelector({
  currentProfil: selectCurrentProfil,
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
const mapDispatchToProps = (dispatch) => ({
  logOutStart : () => dispatch(logOutStart())
})
const HeaderContain = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Header)

export default HeaderContain
