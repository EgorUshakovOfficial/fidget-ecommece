import {Link} from 'react-router-dom';
import {Grid, Breadcrumbs, Typography} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function CheckoutBreadCrumbs(){
    return (
        <Grid item>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize='small' />} >
                <Link to="/cart" style={{color:"gray"}}>
                    <Typography>
                        Cart
                    </Typography>
                </Link>
                <Typography
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Information
                </Typography>
                <Typography color="text.primary">
                    Shipping
                </Typography>
                <Typography color="text.primary">
                    Payment
                </Typography>
            </Breadcrumbs>
        </Grid>
    )
}