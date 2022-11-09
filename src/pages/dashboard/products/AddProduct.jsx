import {useContext} from 'react';
import {Box, Typography, Button} from '@mui/material';
import {Add} from '@mui/icons-material';
import {ProductContext} from '../../../context/ProductContext';

export default function AddProduct(){
    const {handleNewProductClick} = useContext(ProductContext);
    return (
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"
        }}>
            <Typography variant="h5" component="h1">Products</Typography>
            <Button
                variant="contained"
                size="medium"
                endIcon={<Add />}
                onClick={handleNewProductClick}
            >
                New Product
            </Button>
        </Box>
    )
}