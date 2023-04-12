
import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.items;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

const selectFilterValue = state => state.filter;

const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilterValue,
  selectVisibleContacts,
};