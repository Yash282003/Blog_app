import React from "react";
import Tour from "./Tour";
import './Tours.css';
import BlogApp from "./Blogapp";
const Tours = ({ tours, removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>Explore something new...</h2>
        <div className="underline"></div>
      </div>
      <div>
       {Array.isArray(tours) &&
  tours.map((tour, index) => (
    <Tour
      key={tour.id || index}
      {...tour}
      removeTour={removeTour}
    />
  ))}
  
      </div>
      
    </section>
  );
};

export default Tours;