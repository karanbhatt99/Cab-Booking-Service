import React from "react";
import { useParams } from "react-router-dom";
import { cabs } from "../data/cabsData";

const BookingPage = () => {
  const { id } = useParams();
  const cab = cabs.find((c) => c.id === parseInt(id));

  return (
    <div>
      <h1>Booking Page</h1>
      <h2>{cab.type}</h2>
      <p>Price: {cab.price}</p>
      <button>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
