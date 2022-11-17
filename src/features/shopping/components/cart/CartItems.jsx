import {useContext, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Container, Typography, Box, Grid} from '@mui/material';
import CartItem from './CartItem';
import {StateContext} from '../../../../context/StateContext';

export default function CartItems(){
    const {cart} = useContext(StateContext);
    console.log(cart);
    return (
        <Container maxWidth="lg" style={{padding:"65px"}}>
            <Typography variant="h4" component="h1" fontWeight="800" marginBottom="0.6em">Cart</Typography>
            {cart.length !== 0 ?
                <Grid container columnSpacing={2} rowGap={2}>
                        {cart.map(product => (
                            <Grid key={product.id} item sm={12} md={6} lg={4}>
                                <CartItem {...product} />
                            </Grid>
                        ) )}
                </Grid>
                :
                <Fragment>
                    <Typography variant="subtitle1" component="p">Your cart is currently empty</Typography>
                    <Link to="/" style={{color:"black", textDecoration:"underline"}}>Continue shopping</Link>
                </Fragment>
            }
        </Container>
    )
}