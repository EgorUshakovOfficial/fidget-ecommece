import {Grid, Collapse, Container} from '@mui/material';
import Logo from './Logo';
import CheckoutBreadCrumbs  from './CheckoutBreadCrumbs';
import ContactFrom from './ContactForm';
import ShippingForm from './ShippingForm';
import Navigation from './Navigation';
import ItemsInCart from './ItemsInCart';
import ApplyDiscount from './ApplyDiscount';
import CostSummary from './CostSummary';
import MobileShoppingSummary from './MobileShoppingSummary';
export default function Checkout(){
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
                    <ContactFrom />
                    <ShippingForm />
                    <Navigation prevRoute="Cart" nextRoute="Shipping" />
                </Grid>
            </Grid>
        </Container>
    )
}