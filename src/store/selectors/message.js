import { createSelector } from 'reselect';

const selectMessages = state => state.messages;

export const selectCurrentMessages = createSelector(
  [selectMessages],
  messages => messages
);

export const selectCurrentUsers = profilId => createSelector(
  [selectMessages],
  messages => messages.users
)
