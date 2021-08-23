
import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

export default store;


