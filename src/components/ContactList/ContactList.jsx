import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.length !== 0 &&
        contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
