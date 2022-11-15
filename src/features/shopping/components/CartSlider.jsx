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
import {useNavigate} from 'react-router-dom';
import { Close} from '@mui/icons-material';
import {StateContext} from '../../../context/StateContext';
import CartItems from './CartItems';

export default function CartSlider(){
    const {openCart, setOpenCart, cart, total} = useContext(StateContext);

    // Navigation
    const navigate = useNavigate();

    // Handles cart slider and redirects to checkout page
    const handleCheckOut = () => {
        setOpenCart(false);
        navigate('/checkout/information');
    }

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
                        width:"100%",
                    }}>
                        <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.4em"}}>
                            <Typography variant="body1" element="p">Total</Typography>
                            <Typography variant="body1" element="p">{total.toFixed(2)}</Typography>
                        </Box>
                         <Button onClick={handleCheckOut} variant="contained" color="success" size="large" fullWidth={true}>
                            Check Out
                        </Button>
                    </Box>
                </>
                :
                <Typography sx={{marginTop:"0.6em"}}variant="body1" component="p">Your cart is currently empty</Typography>
                }
            </Container>
        </Drawer>
    )
}