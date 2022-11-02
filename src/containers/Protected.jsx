import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {Navigate, Outlet} from 'react-router-dom';

export default function Protected(){
    const {user} = useContext(AuthContext);
    if (user === null){
        return <Navigate to="/admin" />
    }

    return <Outlet />
}