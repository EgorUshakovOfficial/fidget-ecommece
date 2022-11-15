import axios from 'axios';
import { BASE_URL } from '../data/constants';

// Fetch API
export const api = axios.create({baseURL: BASE_URL});

