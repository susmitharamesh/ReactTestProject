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
     <label htmlFor='title'>Title:</label>
      <input 
        type="text"
        className='input-group'
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <br/>
     <label htmlFor='body'>Body:</label>

      <input 
        type="text"
        className='input-group'
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <br/>
      <button className='btn btn-success' onClick={addNewPost}>Add Post</button>
     
    </div>
    
  );
};

export default Form;
