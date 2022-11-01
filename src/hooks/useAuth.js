import {useMemo} from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export default function useAuth(){
    // API used
    const api = useMemo(() => {
        return axios.create({
            baseURL: BASE_URL
        })
    }, [])

    return {}
}