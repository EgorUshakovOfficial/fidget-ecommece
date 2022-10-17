import {useState, useMemo, useContext} from 'react';
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Container,
    Button
}
from "@mui/material";
import {Add, Close, Remove} from '@mui/icons-material';
import redFidgetSpinner from '../assets/images/fidget-spinner-red.jpg';
import {StateContext} from '../context/StateContext';
import CartItems from './CartItems';

export default function CartSlider(){
    const {openCart, setOpenCart, cart} = useContext(StateContext);
    const total = useMemo(() => {
        return cart.reduce((totalCost, {cost, quantity}) => totalCost + cost*quantity, 0)
    }, [JSON.stringify(cart)]);

    return (
        <Drawer
            anchor="right"
            open={openCart}
        >
            <Container>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                }}>
                    <Typography variant="h4" component="h2">
                        Cart
                    </Typography>
                    <IconButton onClick={() => setOpenCart(false)}>
                        <Close />
                    </IconButton>
                </Box>
                {}
                {cart.length > 0 ?
                <>
                    <CartItems />
                    <Box sx={{
                        position:"absolute",
                        top:"calc(100% - 72.64px - 1em)",
                        left:"0",
                        width:"100%",
                        padding:"0 24px",
                        boxSizing:"border-box",
                    }}>
                        <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.4em"}}>
                            <Typography variant="body1" element="p">Total</Typography>
                            <Typography variant="body1" element="p">{total.toFixed(2)}</Typography>
                        </Box>
                        <Button variant="contained" color="success" size="large" fullWidth={true}>Check Out</Button>
                    </Box>
                </>
                :
                <Typography sx={{marginTop:"0.6em"}}variant="body1" component="p">Your cart is currently empty</Typography>
                }
            </Container>
        </Drawer>
    )
}