import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Breadcrumbs, Typography} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function CheckoutBreadCrumbs(){
    const infoExist = (sessionStorage.getItem('info') !== null);
    const shippingExist = (sessionStorage.getItem('shipping') !== null);

    // States
    const [infoVisited, setInfoVisited] = useState(() => infoExist);
    const [shippingVisited, setShippingVisited] = useState(() => shippingExist);
    const [paymentVisited, setPaymentVisited] = useState(() => (infoExist && shippingExist));

    return (
        <Grid item>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize='small' />} >
                <Link to="/cart" style={{color:"black"}}>
                    <Typography>
                        Cart
                    </Typography>
                </Link>

                {infoVisited ?
                    <Link to="/checkout/information" style={{color:"black"}}>
                        Information
                    </Link>
                    :
                    <Typography
                        underline="hover"
                        color="text.secondary"
                        href="/material-ui/getting-started/installation/"
                    >
                        Information
                    </Typography>
                }

                {shippingVisited ?
                    <Link to="/checkout/shipping" style={{color:"black"}}>
                        Shipping
                    </Link>
                    :
                    <Typography color="text.secondary">
                        Shipping
                    </Typography>
                }

                {paymentVisited ?
                    <Link to="/checkout/payment" style={{color:"black"}}>
                        Payment
                    </Link>
                    :
                    <Typography color="text.secondary">
                        Payment
                    </Typography>
                }
            </Breadcrumbs>
        </Grid>
    )
}