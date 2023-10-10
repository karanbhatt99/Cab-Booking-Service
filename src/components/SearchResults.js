import React from "react";
import { Link } from "react-router-dom";
import { cabs } from "../data/cabsData";

const SearchResults = () => {
  return (
    <div>
      <h1>Available Cabs</h1>
      {cabs.map((cab) => (
        <div key={cab.id}>
          <h2>{cab.type}</h2>
          <p>Price: {cab.price}</p>
          <p>Estimated Arrival Time: {cab.estimatedTime}</p>
          <Link to={`/booking/${cab.id}`}>
            <button>Book Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
