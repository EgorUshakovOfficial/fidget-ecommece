import {useContext} from 'react';
import { StateContext} from '../../context/StateContext';
import {CheckoutContext} from '../../context/CheckoutContext';
import {TRACKED_SHIPPING_COST} from '../../utils/constants';
import {Grid, Typography} from '@mui/material';

export default function CostSummary(){
    const {total} = useContext(StateContext);
    const {shippingMethod} = useContext(CheckoutContext);
    const shippingCost = (shippingMethod === "tracked-shipping") ?
        TRACKED_SHIPPING_COST : 0

    return (
        <Grid item style={{
            display:"flex",
            flexDirection:"column",
            gap:"0.6em",
            borderTop:"1px solid lightgray"
        }}>
            <Grid item container alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle1" component="span">
                    Subtotal
                </Typography>
                <Typography variant="subtitle2" component="span">
                    ${total}
                </Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle1" component="span">
                    Shipping
                </Typography>
                <Typography variant="subtitle2" component="span">
                    {shippingCost > 0 ? shippingCost : 'Free'}
                </Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="space-between" style={{borderTop:"1px solid lightgray"}}>
                <Typography variant="subtitle2" component="span">
                    Total
                </Typography>
                <Typography variant="h5" component="p">
                    ${total + shippingCost}
                </Typography>
            </Grid>
        </Grid>
    )
}