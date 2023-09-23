import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from './API';
import Form from './Form';

const App = () => {
  const [posts, setPosts] = useState([]);
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
  }, []); // Dependency array should be empty to fetch data only once on component mount

  const handlePost = async (newPostData) => {
    try {
      const response = await axios.post(apiUrl, newPostData);
      const data = response.data;
      setPosts([...posts, data]);
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  return (
    <div className="App">
      <Form handlePost={handlePost} />
      <API posts={posts} />
    </div>
  );
};

export default App;
