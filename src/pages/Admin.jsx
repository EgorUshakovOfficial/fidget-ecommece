import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext, LoginForm} from '../features/authentication/index';

export default function Admin(){
    const {user, token} = useContext(AuthContext);

    // Loading state
    if (token && user === null){
        return <p>Loading...</p>
    }

    // Redirects user to dashboard if they are authenticated
    if (token && user){
        return <Navigate to="/dashboard" />
    }

    return (
        <div id="admin" style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh"
        }}>
            <LoginForm />
        </div>
    )
}