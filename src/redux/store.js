import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../PostList/postSlice';

const store = configureStore({
    reducer: {
        posts: postSlice.reducer,
    },
});

export default store;
