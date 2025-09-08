import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Import the star icon

import './StarRating.css'

const StarRating = () => {
  const [rating, setRating] = useState(0); // State for the selected rating
  const [hover, setHover] = useState(0);   // State for hover effect
  return (
    <>
    <h1>Rate our service!</h1>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => { // Map over an array for 5 stars
        index += 1; // Adjust index to be 1-based

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'} // Apply 'on' class for filled stars
            onClick={() => setRating(index)} // Set rating on click
            onMouseEnter={() => setHover(index)} // Set hover state on mouse enter
            onMouseLeave={() => setHover(rating)} // Reset hover on mouse leave
            size={30} // Adjust size as needed
            color={index <= (hover || rating) ? '#ffd700' : '#e4e5e9'} // Set color based on state
          />
        );
      })}
      </div>
    </>
  )
}

export default StarRating
