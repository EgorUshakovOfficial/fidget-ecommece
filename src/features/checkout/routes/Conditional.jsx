import {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import {StateContext} from '../../../context/StateContext';

// Conditional route that prevents user from accessing
// any checkout route if cart is empty
export default function Conditional(){
    const {cart} = useContext(StateContext);

    // If no items are in cart, redirect user back to home page
    if (cart.length === 0){
        return <Navigate to="/" />
    }

    return <Outlet />;
}