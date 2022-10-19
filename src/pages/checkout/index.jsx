import {Grid, Box} from '@mui/material';
import Logo from './Logo';
import CheckoutBreadCrumbs  from './CheckoutBreadCrumbs';
import ShippingForm from './ShippingForm';
import Navigation from './Navigation';
import ItemsInCart from './ItemsInCart';
import ApplyDiscount from './ApplyDiscount';
import CostSummary from './CostSummary';
export default function Checkout(){
    return (
        <Grid container columnSpacing={4} justifyContent="center" alignItems="center" style={{minHeight:"100vh"}}>
            <Grid item style={{display:"flex", flexDirection:"column", gap:"0.6em"}}>
                <Logo />
                <CheckoutBreadCrumbs />
                <ShippingForm />
                <Navigation prevRoute="Cart" nextRoute="Shipping" />
            </Grid>
            <Grid item style={{display:"flex", flexDirection:"column", gap:"0.6em"}}>
                <ItemsInCart />
                <ApplyDiscount />
                <CostSummary />
            </Grid>
        </Grid>
    )
}