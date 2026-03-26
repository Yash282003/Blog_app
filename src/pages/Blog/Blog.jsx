import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import BlogForm from "./Blogform";
const url = "https://69c549f08a5b6e2dec2c219a.mockapi.io/tours/tours";;

function Blog() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const updatedTours = tours.filter((tour)=>tour.id!==id);
    setTours(updatedTours);
    fetch(url + "/" + id, {
      method: 'DELETE',
      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        return fetch(url);
      })
     
    console.log(id);
  }
 
const fetchTours = async () => {
  setLoading(true);
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("API response:", data);

    // ensure array
    setTours(Array.isArray(data) ? data : data.tours || []);

    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
  useEffect(() => {
    fetchTours();
  }, []);
const addBlog = async (blogData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    const newBlog = await response.json();

    // update UI instantly
    setTours((prevTours) => [...prevTours, newBlog]);
  } catch (error) {
    console.log(error);
  }
};
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // if (tours.length === 0) {
  //   return (
  //     <main>
  //       <div className="title">
  //         <h2>no tours left</h2>
  //         <button className="btn" onClick={() => fetchTours()}>
  //           reload
  //         </button>
  //       </div>
  //     </main>
  //   );
  // }
  console.log("Fetched tours:", tours);
  return (
  <main>
    <BlogForm onSubmit={addBlog} />

      <Tours tours={tours} removeTour={removeTour} />

  </main>
);
}

export default Blog;