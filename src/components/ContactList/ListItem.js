import PropTypes from 'prop-types';
import { NameContainer, ContactName } from './ContactList.styled';

const ListItem = ({ name, number }) => {
  return (
    <NameContainer>
      <ContactName>{name}:</ContactName>
      <span>{number}</span>
    </NameContainer>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export { ListItem };
