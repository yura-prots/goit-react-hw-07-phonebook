import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import { getContacts } from '../../redux/selectors/selectors';
import { addContact } from '../../redux/contacts/slice';
import {
  Form,
  FormGroup,
  Field,
  ErrorMessage,
  Button,
} from './ContactsForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  phone: Yup.string().min(6, 'Too Short!').required('Required'),
});

const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          id: '',
          name: '',
          phone: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          const nameToAdd = values.name.toLowerCase();
          const nameInList = contacts.find(contact => {
            return contact.name.toLowerCase() === nameToAdd;
          });

          if (nameInList) {
            return alert(`Contact ${nameToAdd} in the list`);
          }

          values.id = nanoid();
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <FormGroup>
            Name
            <Field id="name" type="text" name="name" required />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field id="phone" type="tel" name="phone" required />
            <ErrorMessage name="phone" component="span" />
          </FormGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactsForm;
