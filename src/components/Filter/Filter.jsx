import PropTypes from 'prop-types';
import { InputLabel, FilterInput } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <InputLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </InputLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
