import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = ({ posts }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  const apiUrl = 'http://localhost:3030/posts';

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    getData();
  }, []);

  const handlePost = async () => {
    try {
      const response = await axios.post(apiUrl, newPost);
      const data = response.data;
      setPosts([...posts, data]);
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const addNewPost = () => {
    handlePost(newPost);
    setNewPost({ title: '', body: '' });
  };

  // Rest of your component remains the same

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id}</span> {post.title}
          </h3>
          <p>{post.body}</p>
          <button onClick={() => handleUpdate(post.id)}>Update</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default API;
