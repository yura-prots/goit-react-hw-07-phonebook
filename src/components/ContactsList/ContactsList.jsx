import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/selectors';
import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <List>
        {visibleContacts.map(contact => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </List>
    </div>
  );
};

export default ContactsList;
