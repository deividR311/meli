import axios from 'axios';

export const MELI_API = axios.create({
    baseURL: `${process.env.REACT_APP_MELI_API}`,
    timeout: 15000,
    headers: {
      'Content-type': 'application/json'
    }
});