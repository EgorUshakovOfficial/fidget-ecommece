import {useContext} from 'react';
import {IconButton, Typography, Button, Box} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateBefore';
import InformationSummary from './InformationSummary';
import ShippingMethod from './ShippingMethod';
import { CheckoutContext } from '../../../context/CheckoutContext';

export default function ShippingForm(){
    const {shippingOnSubmit} = useContext(CheckoutContext);

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
                        <NavigateNextIcon size="large" />
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