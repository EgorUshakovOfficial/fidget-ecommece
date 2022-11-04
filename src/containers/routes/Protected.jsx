import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {Navigate} from 'react-router-dom';

export default function Protected({children}){
    const {user} = useContext(AuthContext);

    if (user === null){
        return <Navigate to="/admin" />
    }

    return children
}