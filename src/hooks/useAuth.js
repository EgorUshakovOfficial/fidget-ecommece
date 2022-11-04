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
    const [error, setError] = useState('');
    console.log(user)
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
                if (err.response.status === 401){
                    handleLogout();
                    setError('Your Session has expired. Please log in again')
                }
                else{
                    setError('Error! Something went wrong!')
                }
            })
        }
    }, [token])




    const handleLogout = () => {
        setToken("")
        setUser(null);
        localStorage.removeItem('access-token');
        localStorage.removeItem('user');
    }

    return {
        token,
        setToken,
        user,
        setUser,
        error,
        setError,
        handleLogout
    }
}