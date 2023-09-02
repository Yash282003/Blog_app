import React, { useState } from "react";

const BlogForm = ({ onSubmit }) => {
  const [blogData, setBlogData] = useState({
    name: "",
    info: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!blogData.name || !blogData.info || !blogData.image) {
    //   return;
    // }
    onSubmit(blogData);
    setBlogData({ name: "", info: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={blogData.name}
        onChange={handleChange}
        placeholder="Blog Name"
        style={{
          width: "100%",
          borderRadius: "10px",
          marginTop: "10px",
          height: "40px",
        }}
      />
      <textarea
        name="info"
        value={blogData.info}
        onChange={handleChange}
        placeholder="Blog Info"
        style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
      ></textarea>
      <input
        type="text"
        name="image"
        value={blogData.image}
        onChange={handleChange}
        placeholder="Image URL"
        style={{
          width: "100%",
          borderRadius: "10px",
          marginTop: "10px",
          height: "40px",
        }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          marginTop: "10px",
          borderRadius: "10px",
          fontSize: "25px",
          fontWeight: "500",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
