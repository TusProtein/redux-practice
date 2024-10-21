import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchTextChange: (state, action) => {
            state.search = action.payload;
        },
        statusChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesChange: (state, action) => {
            state.priorities = action.payload;
        },
    },
});
