```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const SubmissionSchema = {
  title: '',
  description: '',
  personalityTraits: [],
  theme: '',
  famousPersonality: '',
  voice: '',
  textResponses: [],
  visualRepresentation: '',
  privateUse: false,
};

export const submitPersona = async (submission) => {
  try {
    const response = await axios.post(`${API_URL}/persona_submissions`, submission);
    return response.data;
  } catch (error) {
    console.error('Error submitting persona', error);
    throw error;
  }
};

export const getSubmission = async (submissionId) => {
  try {
    const response = await axios.get(`${API_URL}/persona_submissions/${submissionId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching submission', error);
    throw error;
  }
};

export const updateSubmission = async (submissionId, updatedSubmission) => {
  try {
    const response = await axios.put(`${API_URL}/persona_submissions/${submissionId}`, updatedSubmission);
    return response.data;
  } catch (error) {
    console.error('Error updating submission', error);
    throw error;
  }
};

export const deleteSubmission = async (submissionId) => {
  try {
    const response = await axios.delete(`${API_URL}/persona_submissions/${submissionId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting submission', error);
    throw error;
  }
};
```