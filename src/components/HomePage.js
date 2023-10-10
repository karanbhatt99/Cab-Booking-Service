import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Cab Booking</h1>
      <input type="text" placeholder="Pickup location" />
      <input type="text" placeholder="Drop-off location" />
      <Link to="/search">
        <button>Search</button>
      </Link>
    </div>
  );
};
import axios from "axios";

const getCoordinates = async (locationName) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${locationName}&inputtype=textquery&fields=geometry&key=YOUR_GOOGLE_MAPS_API_KEY`
    );
    return response.data.candidates[0].geometry.location;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
};

export default HomePage;
