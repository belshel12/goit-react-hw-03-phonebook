import PropTypes from 'prop-types';
import { NameContainer, ContactName } from './ContactList.styled';

const FilterItem = ({ name, number }) => {
  return (
    <NameContainer>
      <ContactName>{name}:</ContactName>
      <span>{number}</span>
    </NameContainer>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export { FilterItem };
