import React from "react";
import Tour from "./Tour";
import './Tours.css'
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Explore something new...</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}  />;
        })}
      </div>
    </section>
  );
};

export default Tours;