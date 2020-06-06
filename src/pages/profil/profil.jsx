import React from 'react';
import { Route } from 'react-router-dom';

import Profil from './../../components/Profil/Profil';
import ProfilCollectonPage from './ProfilCollection';

const ProfilPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={Profil} />
     <Route path={`${match.path}/:profilId`} component={ProfilCollectonPage} />
   </div>
);

export default ProfilPage;
