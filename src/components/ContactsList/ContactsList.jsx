import { useSelector } from 'react-redux';

import { getContacts } from '../../redux/selectors/selectors';
import { getFilter } from '../../redux/selectors/selectors';
import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact => {
    const contactName = contact.name.toLowerCase().trim();
    const filterName = filter.toLowerCase().trim();

    return contactName.includes(filterName);
  });

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
