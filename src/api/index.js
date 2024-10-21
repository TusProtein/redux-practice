import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApi = createAsyncThunk('posts/getPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
});

export const postApi = createAsyncThunk('posts/addPost', async (data) => {
    const res = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        data
    );
    return res.data;
});
