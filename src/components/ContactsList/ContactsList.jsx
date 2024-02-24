import { useSelector } from 'react-redux';

import { selectContacts } from '../../redux/contacts/selector';
import { selectFilter } from '../../redux/filter/selector';
import ListItem from 'components/ListItem';
import { List } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
