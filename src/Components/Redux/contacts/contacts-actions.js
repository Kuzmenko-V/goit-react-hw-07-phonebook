
import { createAction } from '@reduxjs/toolkit';


export const filter = createAction('FILTER');

export const addContactRequest = createAction('ADD_REQUEST');
export const addContactSuccess = createAction('ADD_SUCCESS');
export const addContactError = createAction('ADD_ERROR');

export const deleteContactRequest = createAction('DELETE_REQUEST');
export const deleteContactSuccess = createAction('DELETE_SUCCESS');
export const deleteContactError = createAction('DELETE_ERROR');

export const fetchContactsRequest = createAction('FETCH_REQUEST');
export const fetchContactsSuccess = createAction('FETCH_SUCCESS');
export const fetchContactsError = createAction('FETCH_ERROR');
