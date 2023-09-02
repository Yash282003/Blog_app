import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "http://localhost:3001/tours/";

function Blog() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour=(id)=>{
    const updatedTours = tours.filter((tour)=>tour.id!==id);
    setTours(updatedTours);
    fetch(url+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tours),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Response message from the server
        // Fetch the updated list of blogs from the server
        return fetch(url);
      })
     
    console.log(id);
  }
 
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            reload
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default Blog;