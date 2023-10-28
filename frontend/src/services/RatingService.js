```javascript
import axios from 'axios';

const BASE_URL = '/api';

export const RatingService = {
  async submitRating(rating) {
    try {
      const response = await axios.post(`${BASE_URL}/ratings`, rating);
      return response.data;
    } catch (error) {
      console.error(`Error submitting rating: ${error}`);
      throw error;
    }
  },

  async getRatingsByPersonaId(personaId) {
    try {
      const response = await axios.get(`${BASE_URL}/ratings?personaId=${personaId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ratings: ${error}`);
      throw error;
    }
  },

  async getAverageRating(personaId) {
    try {
      const response = await axios.get(`${BASE_URL}/ratings/average?personaId=${personaId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching average rating: ${error}`);
      throw error;
    }
  },
};
```