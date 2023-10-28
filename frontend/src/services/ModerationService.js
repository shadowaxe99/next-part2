```javascript
import axios from 'axios';

const BASE_URL = '/api/moderation';

export const ModerationService = {
  moderateContent: async (submission) => {
    try {
      const response = await axios.post(`${BASE_URL}/moderate`, submission);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
```