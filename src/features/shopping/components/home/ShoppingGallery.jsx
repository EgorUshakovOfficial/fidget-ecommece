import {useContext} from 'react';
import { Container, Grid} from "@mui/material";
import { StateContext } from '../../../../context/StateContext';
import ShoppingItem from "./ShoppingItem";

export default function ShoppingCart(){
    const {productsForSale} = useContext(StateContext);
    return (
       <Container maxWidth="lg">
        <Grid
            style={{rowGap: "1em", padding:"45px"}}
            container
        >
            {productsForSale.map(product => (
                <Grid item xs={12} sm={6} md={4}>
                    <ShoppingItem {...product}/>
                </Grid>
            ))}

        </Grid>
       </Container>
    )
}