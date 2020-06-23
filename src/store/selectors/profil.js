import { createSelector } from 'reselect';

const selectProfil = state => state.profil;

export const selectCurrentProfil = createSelector(
  [selectProfil],
  profil => profil.currentProfil
);

export const selectProfilCollection = profilId => createSelector(
  [selectProfil],
  profil => profil.collection
)

export const authenticated = () => createSelector(
  [selectProfil],
  profil => profil.authenticated
)

export const selectCurrentCollection = createSelector(
  [selectProfil],
  profil => profil.collection
);

export const selectCurrentroducts = createSelector(
  [selectProfil],
  profil => profil.products
);
