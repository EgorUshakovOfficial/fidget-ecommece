import {Grid, Container} from '@mui/material';
import Logo from '../pages/checkout/Logo';
import CheckoutBreadCrumbs  from '../pages/checkout/CheckoutBreadCrumbs';
import Navigation from '../pages/checkout/Navigation';
import ItemsInCart from '../pages/checkout/ItemsInCart';
import ApplyDiscount from '../pages/checkout/ApplyDiscount';
import CostSummary from '../pages/checkout/CostSummary';
import MobileShoppingSummary from '../pages/checkout/MobileShoppingSummary';

export default function CheckoutLayout({children}){
    return (
        <Container maxWidth="lg" >
            <Grid container columnSpacing={2} justifyContent="space-evenly" flexDirection="row-reverse" alignItems="center" style={{minHeight:"100vh"}}>
                <Grid item md={4} sx={{display:{md:"flex", xs:"none"}, flexDirection:"column", gap:"0.6em"}}>
                    <ItemsInCart />
                    <ApplyDiscount />
                    <CostSummary />
                </Grid>
                <Grid item sm={12} md={5} style={{display:"flex", flexDirection:"column", gap:"0.6em"}}>
                    <Logo />
                    <MobileShoppingSummary />
                    <CheckoutBreadCrumbs />
                    {children}
                    <Navigation prevRoute="Cart" nextRoute="Shipping" />
                </Grid>
            </Grid>
        </Container>
    )
}