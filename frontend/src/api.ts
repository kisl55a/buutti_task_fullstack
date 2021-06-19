import axios from 'axios';

const baseURL = `http://localhost:4000/v1/`;
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || baseURL,
});

export default instance;
