import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {IconButton, Typography, Button, Box} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateBefore';
import ShippingMethod from './ShippingMethod';
import { CheckoutContext } from '../../context/CheckoutContext';

export default function ShippingForm(){
    const {shippingOnSubmit} = useContext(CheckoutContext);
    const navigate = useNavigate();

    return (
        <form action="#" method="POST" style={{
            display:"flex",
            flexDirection:"column",
            gap:"0.6em"
        }}
            onSubmit={shippingOnSubmit}
        >
            <ShippingMethod />
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap="0.2em">
                    <IconButton aria-label="previous" >
                        <NavigateNextIcon size="large" onClick={() => navigate('/checkout/information')} />
                    </IconButton>
                    <Typography variant="body1" component="p">Return to information</Typography>
                </Box>
                <Button variant="contained" type="submit" color="success" size="small">
                    Continue to Payment
                </Button>
            </Box>
        </form>
    )
}