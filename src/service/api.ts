import axios from 'axios';

console.log('REACT_APP_BASE_URL:', process.env.REACT_APP_BASE_URL);

const baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
