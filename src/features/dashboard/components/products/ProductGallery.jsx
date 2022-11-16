import {useContext} from 'react';
import {Grid, Box, Typography} from '@mui/material';
import ProductItem from './ProductItem';
import { StateContext } from '../../../../context/StateContext';

export default function ProductGallery() {
  const {productsForSale} = useContext(StateContext);
  return (
    <Box sx={{ width: '100%', mt:"2em" }}>
      {productsForSale.length > 0 ?
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
          {productsForSale.map(product =>  <ProductItem {...product} />)}
        </Grid>
        :
        <Typography>No products are currently on sell</Typography>
      }
    </Box>
  );
}