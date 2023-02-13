import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Wrapper, Title, ContactsWrapper } from './App.styled';

const initialsContacts = () =>
  JSON.parse(localStorage.getItem('saved_contacts')) ?? [];

export default function App() {
  const [contacts, setContacts] = useState(initialsContacts);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    localStorage.setItem('saved_contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isExist = contacts.find(
      input =>
        input.name.toLowerCase() === contact.name.toLowerCase() ||
        input.number === contact.number
    );
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts([contact, ...contacts]);
  };

  const handleFilterInputChange = event => setFilterValue(event.target.value);

  const renderContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const deleteContact = id =>
    setContacts(prevState => prevState.filter(contact => contact.id !== id));

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmitForm={formSubmitHandler} contacts={contacts} />
      <Title>Contacts:</Title>
      <ContactsWrapper>
        <Filter filter={filterValue} onChange={handleFilterInputChange} />
        <ContactList contacts={renderContacts} deleteContact={deleteContact} />
      </ContactsWrapper>
    </Wrapper>
  );
}
