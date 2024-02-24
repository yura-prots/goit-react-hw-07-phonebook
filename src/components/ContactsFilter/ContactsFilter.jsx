import { useDispatch, useSelector } from 'react-redux';

import { Filter } from './ContactsFilter.styled';
import { filterContacts } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/selectors';

const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <Filter
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        placeholder="Find contact by name"
      />
    </div>
  );
};

export default ContactsFilter;
