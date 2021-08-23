import { createSelector } from '@reduxjs/toolkit'; 


export const getFilter = state => state.contacts.filter;

export const getContactsItems = state => state.contacts.items;

export const getContactsFiltred = createSelector(
    [getFilter, getContactsItems],
    (filterValue, contacts) => {
  return contacts.filter(e => e.name.toLowerCase().includes(filterValue.toLowerCase())) ;
});