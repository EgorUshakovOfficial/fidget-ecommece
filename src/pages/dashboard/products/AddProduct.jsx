import {Box, Typography, Button} from '@mui/material';
import {Add} from '@mui/icons-material';
export default function AddProduct(){
    return (
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"
        }}>
            <Typography variant="h5" component="h1">Products</Typography>
            <Button variant="contained" size="medium" endIcon={<Add />}>New Product</Button>
        </Box>
    )
}