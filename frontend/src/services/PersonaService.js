```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const PersonaService = {
  async getPersonas() {
    try {
      const response = await axios.get(`${API_URL}/personas`);
      return response.data;
    } catch (error) {
      console.error('Error fetching personas', error);
      throw error;
    }
  },

  async purchasePersona(personaId, userId) {
    try {
      const response = await axios.post(`${API_URL}/transactions`, {
        personaId,
        userId,
      });
      return response.data;
    } catch (error) {
      console.error('Error purchasing persona', error);
      throw error;
    }
  },

  async applyPersona(personaId, userId) {
    try {
      const response = await axios.put(`${API_URL}/users/${userId}`, {
        personaId,
      });
      return response.data;
    } catch (error) {
      console.error('Error applying persona', error);
      throw error;
    }
  },

  async previewPersona(personaId) {
    try {
      const response = await axios.get(`${API_URL}/personas/${personaId}`);
      return response.data;
    } catch (error) {
      console.error('Error previewing persona', error);
      throw error;
    }
  },

  async submitPersona(personaData) {
    try {
      const response = await axios.post(`${API_URL}/persona_submissions`, personaData);
      return response.data;
    } catch (error) {
      console.error('Error submitting persona', error);
      throw error;
    }
  },
};
```