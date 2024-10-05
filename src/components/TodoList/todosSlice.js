import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn JavaScript', priority: 'High', completed: false },
        { id: 2, name: 'Learn React', priority: 'Low', completed: true },
        { id: 3, name: 'Learn Redux', priority: 'Medium', completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleStatus: (state, action) => {
            const currentStatus = state.find(
                (todo) => todo.id === action.payload
            );
            currentStatus.completed = !currentStatus.completed;
        },
    },
});
