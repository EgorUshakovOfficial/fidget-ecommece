import {
    Badge,
    Card,
    CardHeader,
    Box,
    Grid,
    Typography,
    CardMedia,
    Paper,
    IconButton,
    Button,
    CardActions,
} from "@mui/material";
import { Add, Remove } from '@mui/icons-material';
import useShoppingService from "../../hooks/useShoppingService";

export default function ShoppingItem({
    title,
    imageUrl,
    stock,
    price,
    _id
}){
    const {
        numItem,
        handleProductIncrement,
        handleProductDecrement,
        handleAddToCart
    } = useShoppingService(_id, stock, price, title, imageUrl);

    const productInStock = stock !== 0;
    const disabled = productInStock === false;

    return (
        <Badge
            color="error"
            badgeContent="Sold out"
            invisible={productInStock}
         >
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
                                <IconButton disabled={disabled} onClick={handleProductDecrement}>
                                    <Remove />
                                </IconButton>
                                <Box component="div" sx={{ display: 'inline', marginInline:"0.5em"}}>{numItem}</Box>
                                <IconButton disabled={disabled} onClick={handleProductIncrement}>
                                    <Add />
                                </IconButton>
                            </Box>
                            <Button disabled={disabled} color="success" variant="contained" onClick={handleAddToCart}>
                                <Typography variant="body2">
                                    Add to Cart
                                </Typography>
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Paper>
        </Badge>
    )
}