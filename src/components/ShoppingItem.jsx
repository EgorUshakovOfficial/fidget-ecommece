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
} from "@mui/material"
import { Add, Remove } from '@mui/icons-material';
export default function ShoppingItem({
    productName, 
    productImage, 
    productDescription, 
    productCost 
}){
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
                    subheader={productDescription}
                    action={
                    <Typography variant="h4">
                        {productCost}
                    </Typography>
                    }
                />
                <CardActions>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Box>
                            <IconButton>
                                <Remove />
                            </IconButton>
                            <Box component="div" sx={{ display: 'inline', marginInline:"0.5em"}}>12</Box>
                            <IconButton>
                                <Add />
                            </IconButton>
                        </Box>
                        <Button color="success" variant="contained">
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