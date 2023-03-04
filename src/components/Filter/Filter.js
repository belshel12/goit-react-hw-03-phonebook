import PropTypes from 'prop-types';
import { FilterContainer, Label, FilterInput } from './Filter.styled';

const Filter = ({ onSearch, value }) => {
  return (
    <FilterContainer>
      <Label>
        Find contacts by name
        <FilterInput name="filter" onChange={onSearch} value={value} />
      </Label>
    </FilterContainer>
  );
};

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
