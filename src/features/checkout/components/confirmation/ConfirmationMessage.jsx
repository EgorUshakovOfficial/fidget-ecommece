import {useEffect, useContext} from 'react';
import {Typography} from '@mui/material';
import { CheckoutContext } from '../../context/CheckoutContext';
import { StateContext } from '../../../../context/StateContext';

export default function ConfirmationMessage(){
    const {setCart} = useContext(StateContext);
    const {firstName, lastName} = useContext(CheckoutContext);

    useEffect(() => {
        // Clears any products in session storage
        sessionStorage.clear();

        // Reset state of cart
        return () => setCart([]);
    }, []);

    return (
        <Typography>
            Thank you for your order, {firstName} {lastName}. A confirmation email filled with the details of your purchase has been sent!
        </Typography>
    )
};