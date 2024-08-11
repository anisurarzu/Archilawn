// utils/fetchApi.js
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Function to fetch data from API using Fetch
export const fetchFromApiWithFetch = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API with Fetch:', error);
    throw error;
  }
};
