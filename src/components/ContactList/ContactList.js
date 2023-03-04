import PropTypes from 'prop-types';
import { ListItem } from './ListItem';
import { List, Item, DeleteBtn } from './ContactList.styled';
import { FilterItem } from './FilterItem';

const ContactList = ({ contacts, select, filter, onDelete }) => {
  const selectContact = select();
  return (
    <List>
      {filter
        ? selectContact.map(contact => (
            <Item key={contact.id}>
              <FilterItem name={contact.name} number={contact.number} />
              <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </DeleteBtn>
            </Item>
          ))
        : contacts.map(contact => (
            <Item key={contact.id}>
              <ListItem name={contact.name} number={contact.number} />
              <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </DeleteBtn>
            </Item>
          ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      filter: PropTypes.string,
    })
  ).isRequired,
  select: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
