// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterSlice';

import { FilterLabel, FilterInput, WrapperFilter } from './Filter.styled';

const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);

    const changeFilt = event => {
        // setFilter(event.target.value);
        dispatch(changeFilter(event.target.value));
    };

    return (
        <WrapperFilter>
            <FilterLabel>
                Find contacts by name
                <FilterInput
                    type="text"
                    value={filter}
                    onChange={changeFilt}
                />
            </FilterLabel>
        </WrapperFilter>
    );
};

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

export default Filter;
