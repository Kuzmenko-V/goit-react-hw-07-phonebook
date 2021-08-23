import './App.css';
import Section from './Components/Section';
import Form from './Components/Form';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

export default function App() {

  return (
      <div className="App">
        <Section title="Телефонная книга">
          <Form/>
        </Section>
        <Section title="Контакты">
          <Filter />
        <ContactList/>
        </Section>
      </div>
    );
};
