import axios from 'axios';

const apiURL = 'http://localhost:8000'

const API = axios.create({
  baseURL: apiURL, // FastAPI backend URL
});

export const sendGoogleAuthCode = (code) => {
  return API.post('/api/users/auth/google/', {
    code: code
  })
}

export default API;
