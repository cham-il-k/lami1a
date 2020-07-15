import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { compose } from 'redux'
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { createStructuredSelector } from 'reselect'
import LogoBox from './../Logo/Logo'
import { selectCurrentProfil } from '../../store/selectors/profil';
import { selectCartHidden } from '../../store/selectors/cart';
import {isEmpty} from './../../util/is-empty'
import { logOutStart } from './../../store/actions/profil'
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  MainBar,
  OptionLinkHide,
  SecondBar
} from './header-styled';
const Header = ({ currentProfil, hidden, logOutStart }) => {
    return (
      <HeaderContainer>
        <LogoContainer to='/'>
          <LogoBox className='logo' />
        </LogoContainer>
        <OptionsContainer>
          { (!isEmpty(currentProfil)) ? (
           <>
           <OptionLink to='/profil'>Profil</OptionLink>
           <OptionLink to='/collection'>Collection</OptionLink>
           <OptionLink to='/messages'>Messages</OptionLink>
          
        </>): (<></>)
          }<OptionLink to='/shop'>SHOP</OptionLink>
          <OptionLink to='/contact'>CONTACT</OptionLink>
          { 
           !isEmpty(currentProfil)  ? (
           
          <OptionLink to='/' onClick={logOutStart}>
              SIGN OUT
          </OptionLink>
          
          ): (
              <OptionLink to='/signup'>SIGN in/up </OptionLink>
            )}
          <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
        
      </HeaderContainer>
    );

  }
 const mapStateToProps = createStructuredSelector({
  currentProfil: selectCurrentProfil,
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
