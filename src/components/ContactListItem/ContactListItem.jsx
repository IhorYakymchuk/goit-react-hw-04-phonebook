import PropTypes from 'prop-types';
import {
  ListItem,
  UserWrapper,
  Wrapper,
  NumberWrapper,
  Button,
} from './ContactListItem.styled';
import { TiUser } from 'react-icons/ti';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <UserWrapper key={id}>
      <Wrapper>
        <TiUser size={25} color={'darkpurple'} />
        <ListItem>{name}:</ListItem>
      </Wrapper>
      <NumberWrapper>
        <ListItem>{number}</ListItem>
        <Button onClick={() => deleteContact(id)}>Delete</Button>
      </NumberWrapper>
    </UserWrapper>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
