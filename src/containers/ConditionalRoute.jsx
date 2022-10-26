import {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import {StateContext} from '../context/StateContext';

export default function ConditionalRoute(){
    const {cart} = useContext(StateContext);
    if (cart.length === 0){
        return <Navigate to="/" />
    }
    return <Outlet />
}