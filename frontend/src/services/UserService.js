```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const UserSchema = {
  id: String,
  name: String,
  email: String,
  purchasedPersonas: Array,
  appliedPersonas: Array,
};

export const user = {
  id: '',
  name: '',
  email: '',
  purchasedPersonas: [],
  appliedPersonas: [],
};

export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    user.id = response.data.id;
    user.name = response.data.name;
    user.email = response.data.email;
    user.purchasedPersonas = response.data.purchasedPersonas;
    user.appliedPersonas = response.data.appliedPersonas;
    return user;
  } catch (error) {
    console.error('Error fetching user data: ', error);
  }
};

export const updateUser = async (userId, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error('Error updating user data: ', error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user: ', error);
  }
};
```