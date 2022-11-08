import {Grid, Paper, Box, IconButton, Tooltip, Typography} from '@mui/material';
import ProductItem from './ProductItem';

import redFidgetSpinner from '../../../assets/images/fidget-spinner-red.jpg'
import yellowFidgetSpinner from '../../../assets/images/fidget-spinner-yellow.jpg';
import blueFidgetSpinner from '../../../assets/images/fidget-spinner-blue.jpg';
import greenFidgetSpinner from '../../../assets/images/fidget-spinner-green.jpg';
import blackFidgetSpinner from '../../../assets/images/fidget-spinner-black.jpg';
import whiteFidgetSpinner from '../../../assets/images/fidget-spinner-white.png';

// Make call from API endpoint to retrieve data...
const products = [
    {
        id:"1",
        title: "Red Fidget Spinner",
        imageUrl: redFidgetSpinner,
        quantity:4,
        price: 5.99
    },
    {
        id:"2",
        title: "Blue Fidget Spinner",
        imageUrl: blueFidgetSpinner,
        quantity: 2,
        price: 7.99
    },
    {
        id:"3",
        title: "Yellow Fidget Spinner",
        imageUrl: yellowFidgetSpinner,
        quantity: 2,
        price: 12.99
    },
    {
        id:"4",
        title: "Green Fidget Spinner",
        imageUrl: greenFidgetSpinner,
        quantity: 2,
        price: 1.99
    },
    {
        id:"5",
        title: "Black Fidget Spinner",
        imageUrl: blackFidgetSpinner,
        quantity: 2,
        price: 1.99
    },
    {
        id:"6",
        title: "White Fidget Spinner",
        imageUrl: whiteFidgetSpinner,
        quantity: 1,
        price: 12.99
    },
]

export default function ProductGallery() {
  return (
    <Box sx={{ width: '100%', mt:"2em" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
        {products.map(product =>  <ProductItem {...product} />)}
      </Grid>
    </Box>
  );
}