import { useEffect} from 'react';
import './ContactList.css';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../Redux/contacts/contacts-operations';
import { getContactsFiltred } from '../Redux/contacts/contacts-selectors';


function ContactList({ contactsFiltred, onDeleteContact,fetchContacts }) {
   useEffect(() => {
      fetchContacts()
  }, [fetchContacts]);
   return (
   <ul className="ContactList">
      {contactsFiltred.map(contact =>
         <li key={contact.id} >
            <p>{contact.name}: {contact.number}</p>
            <button onClick={()=>onDeleteContact(contact.id)}>Удалить</button>
         </li>
      )}
   </ul> 
);
}

const mapStateToProps = state => {
   return {contactsFiltred: getContactsFiltred(state)};
};

const mapDispatchToProps = dispatch => {

   return {
      onDeleteContact: (id) => dispatch(deleteContact(id)),
      fetchContacts: ()  => dispatch(fetchContacts()),
   };
};
export default connect(mapStateToProps,mapDispatchToProps)(ContactList);