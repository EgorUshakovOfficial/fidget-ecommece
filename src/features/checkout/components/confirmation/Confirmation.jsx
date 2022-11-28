import {useEffect, useContext} from 'react';
import {Container} from '@mui/material';
import { StateContext } from '../../../../context/StateContext';
import ConfirmationMessage from './ConfirmationMessage';
import ContinueShopping from '../../../../components/ContinueShopping';

export default function Confirmation(){
    const {setCart} = useContext(StateContext);

    // useEffect(() => {
    //     // Clears any products in session storage
    //     sessionStorage.clear();

    //     // Reset state of cart
    //     return () => setCart([]);
    // }, []);

    return (
        <Container
            id="confirmation"
            maxWidth="md"
            style={{
                minHeight:"100vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"
            }}
        >
            <ConfirmationMessage />
            <ContinueShopping />
        </Container>
    )
};