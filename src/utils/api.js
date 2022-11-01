import axios from 'axios';
import {BASE_URL} from '../utils/constants';

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers:{
        'Content-type':"application/json"
    }
});

export default axiosInstance;
