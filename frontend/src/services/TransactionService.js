```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const TransactionService = {
  async getTransaction(transactionId) {
    try {
      const response = await axios.get(`${API_URL}/transactions/${transactionId}`);
      return response.data;
    } catch (error) {
      console.error(`Error in getTransaction: ${error}`);
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
      console.error(`Error in purchasePersona: ${error}`);
    }
  },

  async getTransactionsByUser(userId) {
    try {
      const response = await axios.get(`${API_URL}/transactions/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error in getTransactionsByUser: ${error}`);
    }
  },
};
```