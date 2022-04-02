import axios from 'axios';

export const signin = async (userData) => {
  try {
    const response = await axios.post(`/auth/signin`, userData);
    return response;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`/auth/signup`, userData);
    return response;
  } catch (error) {
    throw error.response.data.error;
  }
};
