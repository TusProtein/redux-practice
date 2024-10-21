import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const filterSearchSelector = (state) => state.filters.search;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    filterSearchSelector,
    (todoList, status, priorities, search) => {
        const result = todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.name.includes(search) &&
                          priorities.includes(todo.priority)
                    : todo.name.includes(search);
            }

            return (
                todo.name.includes(search) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
        return result;
    }
);
