import { createSlice } from '@reduxjs/toolkit';
import { fetchApi, postApi } from '../api';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(postApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(postApi.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            });
    },
});

export default postSlice;
