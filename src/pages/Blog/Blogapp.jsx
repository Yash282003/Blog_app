import React, { useState, useEffect } from 'react';
import BlogForm from './Blogform';
const url = "http://localhost:3001/tours";

const BlogApp = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the existing blogs from the server when the component mounts
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  const handleBlogSubmission = (newBlog) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        return fetch(url);
      })
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error saving blog:', error));
  };

  return (
    <div>
      <h1>Add more...</h1>
      <BlogForm onSubmit={handleBlogSubmission} />
      
    </div>
  );
};

export default BlogApp;

