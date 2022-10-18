import {Grid, Box} from '@mui/material';
import Logo from './Logo';
import CheckoutBreadCrumbs  from './CheckoutBreadCrumbs';
import ShippingForm from './ShippingForm';
import Navigation from './Navigation';
export default function Checkout(){
    return (
        <Grid>
            <Box>
                <Logo />
                <CheckoutBreadCrumbs />
                <ShippingForm />
                <Navigation prevRoute="Cart" nextRoute="Shipping" />
            </Box>
            <Box>
            </Box>
        </Grid>
    )
}