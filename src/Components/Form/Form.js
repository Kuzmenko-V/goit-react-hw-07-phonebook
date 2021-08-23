import  { useState } from 'react';
import './Form.css';
import { connect } from 'react-redux';
import { addContact } from '../Redux/contacts/contacts-operations';
import { getContactsItems } from '../Redux/contacts/contacts-selectors';


function Form({contacts, addContacts }) {
  const [name, setName] = useState('');
  const [number, setNomber] = useState('');
  const inputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': setName(value); break;
      case 'number': setNomber(value); break;
      default: return;
    }
  };
  const formSabmit = e => {
    e.preventDefault();
    if (contacts.filter(e => e.name === name).length === 0) {
      addContacts({ name, number });
    }
    else {
      alert(`${name} уже существует в контактах!`);
    }
    setNomber('');
    setName('');
  }
  return (
            <form  className="form"onSubmit={formSabmit}>
             <label >
               Имя
               <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                onChange={inputChange}
               />
                </label>
             <label >
               Номер телефона
               <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                onChange={inputChange}
               />
             </label>
             <button title="submit">Добавить контакт</button>
            </form>
        );
};

const mapStateToProps = state => {
   return {contacts: getContactsItems(state)};
};
const mapDispatchToProps = dispatch => {

   return {
     addContacts: x => dispatch(addContact(x))
   };
};

export default connect(mapStateToProps,mapDispatchToProps)(Form);