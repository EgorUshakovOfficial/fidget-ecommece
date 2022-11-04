import {useState, useContext, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export default function useLogin(){
    const { setToken, error, setError } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Navigation
    const navigate = useNavigate();

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
            setToken(data.token);

            // Save access token in local storage
            localStorage.setItem('access-token', data.token);

            // Redirect user to the dashboard
            //window.location.href = "http://localhost:3000/dashboard"
            navigate('/dashboard');
        })
        .catch(err => {
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
        handleLogin,
    }

}