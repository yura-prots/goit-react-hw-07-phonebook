import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

import { Item, DeleteBtn } from './ListItem.styled';

const ListItem = ({ contact: { name, phone } }) => {
  // const dispatch = useDispatch();

  return (
    <Item>
      <span>{name}:</span>
      <span>{phone}</span>
      <DeleteBtn type="button">Delete</DeleteBtn>
    </Item>
  );
};

ListItem.propTypes = {
  contact: PropTypes.exact({
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ListItem;
