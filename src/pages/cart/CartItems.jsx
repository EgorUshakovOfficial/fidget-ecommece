import {useContext} from 'react';
import {Typography, Grid} from '@mui/material';
import CartItem from './CartItem';
import {StateContext} from '../../context/StateContext';

export default function CartItems(){
    const {cart} = useContext(StateContext);
    console.log(cart);
    return (
        <div style={{padding:"65px"}}>
            <Typography variant="h4" component="h1" fontWeight="800">Cart</Typography>
            <Grid container>
                <Grid item sm={12} md={6} lg={4}>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            cost={product.cost}
                            quantity={product.quantity}
                        />
                    ) )}
                </Grid>
            </Grid>
        </div>
    )
}