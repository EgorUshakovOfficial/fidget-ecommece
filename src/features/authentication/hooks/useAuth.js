import {useEffect, useState} from 'react';
import {getUser} from '../services/getUser';

export default function useAuth(){
    // State
    const [token, setToken] = useState(() => {
        let accessToken = localStorage.getItem('access-token') || "";
        return accessToken;
    });
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    // Retrieve user object
    useEffect(() => {
        if (token !== ""){
            // GET /user request: Retrieves user from endpoint using access token
            getUser(token)
            .then(user => setUser(user))
            .catch(err => {
                if (err.response.status === 401){
                    handleLogout();
                    setError('Your Session has expired. Please log in again')
                }
                else{
                    setError('Error! Something went wrong!');
                }
            })
        }
    }, [token])

    // Handles logout
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