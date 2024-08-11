// utils/axiosApi.js
import axios from 'axios';

// Access the API URL from environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Function to fetch data from API using Axios
export const fetchFromApiWithAxios = async (endpoint, options = {}) => {
  try {
    const response = await api.get(endpoint, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API with Axios:', error);
    throw error;
  }
};
