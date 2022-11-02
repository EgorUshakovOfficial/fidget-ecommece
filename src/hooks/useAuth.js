import {useEffect, useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';


export default function useAuth(){
    // State
    const [token, setToken] = useState(() => {
        let accessToken = localStorage.getItem('access-token') || "";
        return accessToken;
    });

    const [user, setUser] = useState(null);

    // Retrieve user object
    useEffect(() => {
        if (token !== ""){
            axios.create({
                baseURL:BASE_URL,
                headers:{'Authorization':`bearer ${token}`}
            })
            .get('/getUser')
            .then(async res => {
                let data = await res.data;
                // Set user object
                setUser(data.user)
            })
            .catch(err => {
                // Handle error somehow...
                console.log(err);
            })
        }

    }, [token])


    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return {
        token,
        setToken,
        user,
        setUser,
        handleLogout
    }
}