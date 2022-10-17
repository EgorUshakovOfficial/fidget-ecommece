import {useContext} from 'react';
import {StateContext} from '../context/StateContext';
import {
    Box,
    Typography,
    IconButton,
}
from "@mui/material";
import {Add, Remove} from '@mui/icons-material';
import redFidgetSpinner from '../assets/images/fidget-spinner-red.jpg';
import CartItem from './CartItem';
export default function CartItems(){
    const {cart} = useContext(StateContext);
    return (
        <Box style={{
            minHeight: "calc(100vh - 73px - 1em - 42px - 0.4em)",
            borderTop:"1px solid rgba(0, 0, 0, 0.12)",
            borderBottom:"1px solid rgba(0, 0, 0, 0.12)",
        }}>
            {cart.map(product => (
                <CartItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    cost={product.cost}
                    quantity={product.quantity}
                />
            ))}
        </Box>
    )
}