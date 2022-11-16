import {useState, useContext} from 'react';
import {
    Card,
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
import {StateContext} from '../../../../context/StateContext';
import { Add, Remove } from '@mui/icons-material';

export default function ShoppingItem({
    title,
    imageUrl,
    stock,
    price,
    _id
}){
    const [numItem, setNumItem] = useState(1);
    const {setCart} = useContext(StateContext);

    const handleIncrement = () => {
        setNumItem(state => {
            if (state + 1 <= stock){
                return state + 1;
            }
            return state;
        })
    };

    const handleDecrement = () => {
        setNumItem(state => {
            console.log(stock);
            if (state > 1){
                return state-1;
            }
            return state;
        })
    };

    const handleAddToCart = e => {
        setCart(cart => {
            let index = cart.findIndex(product => product.id === _id);
            if (index !== -1){
                let prevItem = cart[index];
                cart[index] = Object.assign(prevItem, {quantity: numItem, cost: price})
                return cart;
            }

            // Update cart in session storage
            cart = [
                ...cart,
                {
                    name:title,
                    id: _id,
                    cost: price,
                    image: imageUrl,
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
                    image={imageUrl}
                    height="auto"
                    alt="Fidget Spinner"
                />
                <CardHeader
                    title={title}
                    titleTypographyProps={{marginBlock:"0.2em"}}
                    subheader={`$${price}`}
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