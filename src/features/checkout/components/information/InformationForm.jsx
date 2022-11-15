import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {IconButton, Typography, Button, Box} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateBefore';
import ContactForm from './ContactForm';
import ShippingForm from './ShippingForm';
import {CheckoutContext} from '../../context/CheckoutContext';

export default function InformationForm(){
    const {infoOnSubmit} = useContext(CheckoutContext);
    const navigate = useNavigate();

    return (
        <form action="#" method="POST" onSubmit={infoOnSubmit} style={{
            display:"flex",
            flexDirection:"column",
            gap:"0.6em"
        }}>
            <ContactForm />
            <ShippingForm />
            <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap="0.2em">
                    <IconButton aria-label="previous" >
                        <NavigateNextIcon size="large" onClick={() => navigate('/cart')}/>
                    </IconButton>
                    <Typography variant="body1" component="p">Return to Cart</Typography>
                </Box>
                <Button variant="contained" type="submit" color="success" size="small">
                    Continue to Shipping
                </Button>
            </Box>
        </form>
    )
}