import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const getContacts = (_, action) => {
  return action.payload;
};

const addContact = (state, action) => {
  return [...state, action.payload];
};

const delContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.getContactsSuccess]: getContacts,

  [contactsActions.addContactSuccess]: addContact,

  [contactsActions.delContactSuccess]: delContact,
});

const loading = createReducer(false, {
  [contactsActions.getContactsRequest]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.delContactRequest]: () => true,
  [contactsActions.delContactSuccess]: () => false,
  [contactsActions.delContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.getContactsError]: (_, action) => action.payload,
  [contactsActions.getContactsRequest]: () => null,

  [contactsActions.addContactError]: (_, action) => action.payload,
  [contactsActions.addContactRequest]: () => null,

  [contactsActions.delContactError]: (_, action) => action.payload,
  [contactsActions.delContactRequest]: () => null,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  loading,
  error,
  filter,
});
