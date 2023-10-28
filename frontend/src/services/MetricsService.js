```javascript
import axios from 'axios';

const BASE_URL = '/api';

export const MetricsService = {
  getUsageMetrics: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/metrics/usage`);
      return response.data;
    } catch (error) {
      console.error('Error fetching usage metrics', error);
      throw error;
    }
  },

  getPurchaseMetrics: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/metrics/purchases`);
      return response.data;
    } catch (error) {
      console.error('Error fetching purchase metrics', error);
      throw error;
    }
  },

  getSwitchRateMetrics: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/metrics/switch-rate`);
      return response.data;
    } catch (error) {
      console.error('Error fetching switch rate metrics', error);
      throw error;
    }
  },

  getMarketplaceTrafficMetrics: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/metrics/marketplace-traffic`);
      return response.data;
    } catch (error) {
      console.error('Error fetching marketplace traffic metrics', error);
      throw error;
    }
  },

  updateMetrics: async (metrics) => {
    try {
      const response = await axios.post(`${BASE_URL}/metrics/update`, metrics);
      return response.data;
    } catch (error) {
      console.error('Error updating metrics', error);
      throw error;
    }
  },
};
```