import {useState, useContext, useMemo} from 'react';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export default function useLogin(){
    const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // API used
    const api = useMemo(() => {
        return axios.create({
            baseURL: BASE_URL
        })
    }, []);

    // Handle login form
    const handleLogin =  e => {
        // Prevent form from being submitted to the server
        e.preventDefault();

        // Send request to GET /login endpoint
        api
        .post('/login', {email, password})
        .then(async res => {
            let data =  await res.data;
            setUser(data.user);

            // Save access token in local storage
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect user to the dashboard
            window.location.href = "http://localhost:3000/dashboard"
        })
        .catch(err => {
            console.log(err)
            if (err.response.status === 401){
                setError('Please provide a valid email address and password');
            }
            else{
                setError('Error! Something went wrong!');
            }
        })
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        handleLogin,
    }

}