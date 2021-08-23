import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {addContactRequest,addContactSuccess, addContactError ,deleteContactError,deleteContactRequest,deleteContactSuccess, filter,fetchContactsError,fetchContactsRequest ,fetchContactsSuccess} from './contacts-actions';

const initialState = [];
const itemsReducer = createReducer(initialState, {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, {payload})=> {
        const contacts = state.filter(contact => contact.id !== payload);
        return contacts;
    }
    
});

const loading = createReducer(false, {
  
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
    [addContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
   [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
 
});

const filterReducer = createReducer('', {
    [filter]: (state, { payload }) => payload,
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading,
});
