import { addContactRequest, addContactSuccess, addContactError, deleteContactError ,deleteContactRequest ,deleteContactSuccess,fetchContactsError,fetchContactsRequest ,fetchContactsSuccess } from "./contacts-actions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const addContact = prepare => dispatch => {
    const contact = {
        name: prepare.name,
        number: prepare.number
    };
    dispatch(addContactRequest());    
    
    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());
axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));   
};

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }

  // axios
  //   .get('/todos')
  //   .then(({ data }) => dispatch(fetchTodosSuccess(data)))
  //   .catch(error => dispatch(fetchTodosError(error)));
};
