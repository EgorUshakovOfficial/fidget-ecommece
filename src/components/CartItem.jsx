import {useContext} from 'react';
import {StateContext} from '../context/StateContext';
import {
    Box,
    Typography,
    IconButton,
}
from "@mui/material";
import {Add, Remove} from '@mui/icons-material';

export default function CartItem({
    id,
    name,
    image,
    cost,
    quantity
}){
    const {setCart} = useContext(StateContext);

    // Handle increment
    const handleIncrement = () => {
        setCart(cart => {
            let index = cart.findIndex(product => product.id === id);
            let itemToBeIncremented = cart[index];
            console.log(itemToBeIncremented)
            cart[index] = Object.assign(itemToBeIncremented, {quantity: itemToBeIncremented.quantity + 1})
            console.log(cart)
            // Update session storage
            sessionStorage.setItem("cart", JSON.stringify(cart));
            return [...cart];
        })
    }

    // Handle decrement
    const handleDecrement = () => {
        setCart(cart => {
            let index = cart.findIndex(product => product.id === id);
            let itemToBeDecremented = cart[index];
            if (itemToBeDecremented.quantity > 1){
                cart[index] = Object.assign(itemToBeDecremented, {quantity: itemToBeDecremented.quantity - 1})
                return [...cart];
            }
            cart = cart.filter(product => product.id !== id);
            return [...cart];
        })
    }

    return (
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            gap:"0.2em",
            paddingBlock: "0.5em",
            borderBottom:"1px solid rgba(0, 0, 0, 0.12)",

        }}>
            <Box
                component="img"
                src={image}
                sx={{
                    height: '100px'
                }}
                alt={name}
            />
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography variant="subtitle"  component="h3">
                    {name}
                </Typography>
                <Box>
                    <IconButton variant="outlined" onClick={handleDecrement}>
                        <Remove />
                    </IconButton>
                    <Box component="div" sx={{ display: 'inline', marginInline:"0.5em"}}>{quantity}</Box>
                    <IconButton variant="outlined" onClick={handleIncrement}>
                        <Add />
                    </IconButton>
                </Box>
                <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    <Typography variant="body1" component="p">
                        Cost
                    </Typography>
                    <Typography variant="body1" component="p">
                        {(cost*quantity).toFixed(2)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}