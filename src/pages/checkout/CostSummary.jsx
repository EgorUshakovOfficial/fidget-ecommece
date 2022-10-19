import {Divider, Grid, Typography} from '@mui/material';
export default function CostSummary(){
    return (
        <Grid item style={{display:"flex", flexDirection:"column", gap:"0.6em"}}>
            <Grid item container alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle1" component="span">
                    Subtotal
                </Typography>
                <Typography variant="subtitle2" component="span">
                    $123.43
                </Typography>
            </Grid>
            <Grid item container alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle1" component="span">
                    Shipping
                </Typography>
                <Typography variant="subtitle2" component="span">
                    Free
                </Typography>
            </Grid>
            <Divider />
            <Grid item container alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle2" component="span">
                    Total
                </Typography>
                <Typography variant="h5" component="p">
                    $124.42
                </Typography>
            </Grid>
        </Grid>
    )
}