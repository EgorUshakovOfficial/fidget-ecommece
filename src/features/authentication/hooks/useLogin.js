import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import {login} from '../services/login';

export default function useLogin(){
    const { setToken, error, setError } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Navigation
    const navigate = useNavigate();

    // Handle login form
    const handleLogin =  e => {
        // Prevent form from being submitted to the server
        e.preventDefault();

        // Send POST /login: Retrieves access token
        login(email, password)
        .then(token => {
            // Saves access token in local storage
            localStorage.setItem('access-token', token);

            // Redirects user to the dashboard
            navigate('/dashboard');
        })
        .catch(err => {
            if (err.response.status === 401){
                setError('Please provide a valid email address and password');
            }
            else{
                setError('Error! Something went wrong!');
            }
        });
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