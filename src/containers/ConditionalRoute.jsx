import {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import {StateContext} from '../context/StateContext';
import {CheckoutProvider} from '../context/CheckoutContext';

export default function ConditionalRoute(){
    const {cart} = useContext(StateContext);

    // If no items are in cart, redirect user back to home page
    if (cart.length === 0){
        return <Navigate to="/" />
    }

    return (
        <CheckoutProvider>
            <Outlet />
        </CheckoutProvider>
    )
}