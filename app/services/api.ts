import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.petsimples.com/core/auth-company/',
});

export default api;
