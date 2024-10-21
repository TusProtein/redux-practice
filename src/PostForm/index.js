import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postApi } from '../api';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postApi({ title, body }));

        setTitle('');
        setBody('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button type='submit'>Add Post</button>
            </form>
        </div>
    );
};

export default PostForm;
