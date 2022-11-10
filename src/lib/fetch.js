import axios from 'axios';
import { BASE_URL } from '../utils/constants';

// Fetch API
export const fetch = axios.createInstance({
    baseURL: BASE_URL,
    withCredentials:true
});
