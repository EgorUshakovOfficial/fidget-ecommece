import {useContext} from 'react';
import {Grid, Box, Typography} from '@mui/material';
import ProductItem from './ProductItem';
import { ProductContext } from '../../context/ProductContext';

export default function ProductGallery() {
  const {products} = useContext(ProductContext);
  return (
    <Box sx={{ width: '100%', mt:"2em" }}>
      {products.length > 0 ?
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
          {products.map(product =>  <ProductItem {...product} />)}
        </Grid>
        :
        <Typography>No products are currently on sell</Typography>
      }
    </Box>
  );
}