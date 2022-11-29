import {
    Box,
    Typography,
    Button
} from '@mui/material';
import {Add} from '@mui/icons-material';

export default function OrderHeader(){
    return (
        <Box style={{display:"flex", justifyContent:"space-between"}}>
            <Typography component="h1" variant="h5">
                Orders
            </Typography>
            <Button color="primary" variant="contained" endIcon={<Add />}>
                New Order
            </Button>
        </Box>
    )
}