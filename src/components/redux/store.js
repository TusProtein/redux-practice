import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../Filters/filtersSlice';
import todosSlice from '../TodoList/todosSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer,
    },
});

export default store;
