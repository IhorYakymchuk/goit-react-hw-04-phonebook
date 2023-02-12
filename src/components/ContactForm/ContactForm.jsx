import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  AddingForm,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
} from './ContactForm.styled';

const initialsValues = {
  name: '',
  number: '',
};

const FormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().min(7).max(13).required(),
});

const ContactForm = ({ onSubmitForm, contacts }) => {
  const handleSubmitForm = (values, { resetForm }) => {
    const existingUsers = contacts.map(contact => contact.name);
    if (existingUsers.includes(values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    onSubmitForm(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      validationSchema={FormSchema}
    >
      {props => (
        <AddingForm>
          <InputLabel>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrWrapper>
              <ErrorMessage name="name" />
            </ErrWrapper>
          </InputLabel>

          <InputLabel>
            Number
            <Input
              type="tel"
              name="number"
              placeholder="Enter number 000-00-00"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrWrapper>
              <ErrorMessage name="number" />
            </ErrWrapper>
          </InputLabel>

          <Button
            type="submit"
            disabled={
              (props.values.name !== '') & (props.values.number !== '')
                ? false
                : true
            }
          >
            Add contact
          </Button>
        </AddingForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;
