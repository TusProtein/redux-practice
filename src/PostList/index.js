import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSelectors } from '../redux/selectors';
import { fetchApi } from '../api';

const PostList = () => {
    const { items, loading, error } = useSelector(postSelectors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading ...</p>}
            {error && <div>Error: {error}</div>}
            {items.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
