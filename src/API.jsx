import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = ({ posts,setPosts }) => {
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



const handleUpdate = async (id) => {
  const updatedPost = { title: 'Updated Title', body: 'Updated Body' }; 
  try {
    const response = await axios.put(`${apiUrl}/${id}`, updatedPost);
    const data = response.data;
    setPosts(posts.map((post) => (post.id === id ? data : post)));
    getData();
  } catch (error) {
    console.error("Error updating data:", error.message);
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
    getData();
  } catch (error) {
    console.error("Error deleting data:", error.message);
  }
};


  return (
   <>
     

      <h2>Posts</h2>
      <div className='post'>
      {posts.map((post) => (
        
        <div key={post.id}  className="post-list">
          
          <h3>
            <span>{post.id}.</span> {post.title}
          </h3>
          <p>{post.body}</p>
          <button className='btn btn-primary' onClick={() => handleUpdate(post.id)}>Update</button>
          <button  className='btn btn-danger' onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default API; 