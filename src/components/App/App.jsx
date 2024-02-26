import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DotLoader } from 'react-spinners';

import ContactsForm from 'components/ContactsForm';
import ContactsFilter from 'components/ContactsFilter';
import ContactsList from 'components/ContactsList';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Container, Wrapper, Title } from './App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>

      <Wrapper>
        <DotLoader
          color={'white'}
          loading={isLoading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Wrapper>

      <ContactsForm />

      {contacts.length > 0 && (
        <Wrapper>
          <Title>Contacts</Title>
          <ContactsFilter />
          <ContactsList />
        </Wrapper>
      )}
    </Container>
  );
};

export default App;
