import {useState, Fragment} from 'react';
import {Collapse, Grid, Box, Typography, IconButton} from '@mui/material';
import { ShoppingCart, } from '@mui/icons-material';
import ItemsInCart from './ItemsInCart';
import ApplyDiscount from './ApplyDiscount';
import CostSummary from './CostSummary';
export default function MobileShoppingSummary(){
    const [displayCollapse, setDisplayCollapse] = useState('hide');

    const handleCollapse = () => {
        (displayCollapse === "hide") ? setDisplayCollapse("show") : setDisplayCollapse("hide")
    }

    return (
        <Fragment>
            <Grid container sx={{display:{md:"none", xs:"flex", background:"light-gray"}}} alignItems="center" justifyContent="space-between">
                <Box style={{display:"flex", alignItems:"center"}}>
                    <IconButton onClick={handleCollapse}>
                        <ShoppingCart />
                    </IconButton>
                    <Typography>{displayCollapse==="hide" ? 'Show' : 'Hide'} order summary</Typography>
                </Box>
                <Typography>
                    $123.42
                </Typography>
            </Grid>
            <Collapse in={displayCollapse==="show"} timeout="auto" unmountOnExit>
                <Grid sm={12} sx={{display:{md:"none", xs:"flex"}, flexDirection:"column", gap:"0.6em"}}>
                    <ItemsInCart />
                    <ApplyDiscount />
                    <CostSummary />
                </Grid>
            </Collapse>
        </Fragment>
    )
}