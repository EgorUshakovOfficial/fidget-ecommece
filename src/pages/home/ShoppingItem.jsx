import {useState, useContext} from 'react';
import { MarkEmailUnreadSharp, PlusOne, PlusOneRounded } from "@mui/icons-material"
import { Card,
    CardHeader,
    Box,
    Grid,
    Typography,
    CardMedia,
    Paper,
    IconButton,
    Button,
    CardActions
} from "@mui/material";
import {StateContext} from '../../context/StateContext';
import { Add, Remove } from '@mui/icons-material';

export default function ShoppingItem({
    productName,
    productImage,
    productCost,
    productId
}){

    const [numItem, setNumItem] = useState(1);
    const {setCart} = useContext(StateContext);

    const handleIncrement = () => {
        setNumItem(state => state + 1)
    };

    const handleDecrement = () => {
        setNumItem(state => {
            if (state > 1){
                return state-1;
            }
            return state;
        })
    };

    const handleAddToCart = e => {
        setCart(cart => {
            let index = cart.findIndex(product => product.id === productId);
            if (index !== -1){
                let prevItem = cart[index];
                cart[index] = Object.assign(prevItem, {quantity: numItem, cost: productCost})
                return cart;
            }

            // Update cart in session storage
            cart = [
                ...cart,
                {
                    name:productName,
                    id: productId,
                    cost: productCost,
                    image: productImage,
                    quantity: numItem,
                }

            ];
            return cart;
        })
    }

    return (
        <Paper elevation={3}>
            <Card>
                <CardMedia
                    component="img"
                    image={productImage}
                    height="auto"
                    alt="Fidget Spinner"
                />
                <CardHeader
                    title={productName}
                    titleTypographyProps={{marginBlock:"0.2em"}}
                    subheader={`$${productCost}`}
                    subheaderTypographyProps={{variant:"h5", color:"black", fontWeight:"bold"}}
                    style={{padding:"0", marginBlock:"0.2em"}}
                />
                <CardActions>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Box>
                            <IconButton onClick={handleDecrement}>
                                <Remove />
                            </IconButton>
                            <Box component="div" sx={{ display: 'inline', marginInline:"0.5em"}}>{numItem}</Box>
                            <IconButton onClick={handleIncrement}>
                                <Add />
                            </IconButton>
                        </Box>
                        <Button color="success" variant="contained" onClick={handleAddToCart}>
                            <Typography variant="body2">
                                Add to Cart
                            </Typography>
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </Paper>
    )
}