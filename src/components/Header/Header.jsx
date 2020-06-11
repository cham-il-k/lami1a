import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { createStructuredSelector } from 'reselect'
import LogoBox from './../Logo/Logo'
import { selectCurrentProfil } from '../../store/selectors/profil';
import { selectCartHidden } from '../../store/selectors/cart';
import {isEmpty} from './../../util/is-empty'
import { auth, firestore} from './../../util/db/db'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionLinkHide
} from './header-styled';
const Header = ({ currentProfil, hidden }) => {
     console.log((currentProfil.user))
    return (
      <HeaderContainer>
        <LogoContainer to='/'>
          <LogoBox className='logo' />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to='/shop'>SHOP</OptionLink>
          <OptionLink to='/contact'>CONTACT</OptionLink>
          { !isEmpty(currentProfil.userAuth) ? (
           <>
           <OptionLinkHide to='/profil'>Profil</OptionLinkHide>
          <OptionLinkHide to='/collection'>Collection</OptionLinkHide>
          </>
          ):('')
          }
          {!isEmpty(currentProfil.userAuth) ? (
            <OptionLink to='/' onClick={() => auth.signOut()}>
              SIGN OUT
            </OptionLink>
          ) : (
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
export default withRouter(connect(mapStateToProps)(Header))
//export default Header
