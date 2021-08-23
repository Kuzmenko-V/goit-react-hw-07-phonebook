import "./Filter.css";
import { connect } from 'react-redux';
import {filter } from '../Redux/contacts/contacts-actions';
import { getFilter } from '../Redux/contacts/contacts-selectors';

function Filter({ filter, inputChange }) {
    return (
        <label className="Filter">
        Поиск контакта по имени
        <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={filter}
        onChange={inputChange}
        />
        </label>
    );
};
const mapStateToProps = state => {
   return {filter: getFilter(state)}
};

const mapDispatchToProps = dispatch => {

   return {
     inputChange: (x) => dispatch(filter(x.target.value)),
   };
};    
export default connect(mapStateToProps,mapDispatchToProps)(Filter);
