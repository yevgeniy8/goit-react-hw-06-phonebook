import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { changeFilter } = filterSlice.actions;

// const changeFilter = event => {
//     setFilter(event.target.value);
// };
