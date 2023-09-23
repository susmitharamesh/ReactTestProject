import React, { useState } from 'react';

const Form = ({ handlePost }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = () => {
    handlePost(newPost);
    setNewPost({ title: '', body: '' });
  };

  return (
    <div className="Apps">
      <h2>Create a New Post</h2>
      <input 
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input 
        type="text"
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={addNewPost}>Add Post</button>
    </div>
  );
};

export default Form;
