import React, { useState, useEffect } from 'react';
import RatingService from '../services/RatingService';

const PersonaRatings = ({ personaId }) => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchRatings();
  }, [personaId]);

  const fetchRatings = async () => {
    const response = await RatingService.getRatings(personaId);
    setRatings(response.data);
  };

  return (
    <div id="persona-ratings">
      <h2>Ratings</h2>
      {ratings.length > 0 ? (
        ratings.map((rating) => (
          <div key={rating.id}>
            <p>User: {rating.user}</p>
            <p>Rating: {rating.value}</p>
            <p>Comment: {rating.comment}</p>
          </div>
        ))
      ) : (
        <p>No ratings yet.</p>
      )}
    </div>
  );
};

export default PersonaRatings;