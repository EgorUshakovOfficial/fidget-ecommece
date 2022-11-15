import {Grid, Container} from '@mui/material';
import Logo from '../components/home/Logo';
import CheckoutBreadCrumbs  from '../components/home/CheckoutBreadCrumbs';
import ItemsInCart from '../components/home/ItemsInCart';
import ApplyDiscount from '../components/home/ApplyDiscount';
import CostSummary from '../components/home/CostSummary';
import MobileShoppingSummary from '../components/home/MobileShoppingSummary';

export default function CheckoutLayout({children}){
    return (
        <Container>
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
                </Grid>
            </Grid>
        </Container>
    )
}