import {Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography
}
from '@mui/material';
import ProductControls from '../home/ProductControls';
import RemoveItem from './RemoveItem';
export default function CartItem({
    id,
    name,
    image,
    cost,
    quantity
}){
    return(
        <Card>
            <CardMedia
                component="img"
                image={image}
                alt="Fidget Spinner"
            />
            <CardContent>
                <Typography variant="h5" component="h3">
                    {name}
                </Typography>
                <Typography variant="h5" component="h3" fontWeight="700">
                    ${cost}
                </Typography>
            </CardContent>
            <CardActions display="flex" style={{justifyContent:"space-between"}}>
                <ProductControls id={id} quantity={quantity} />
                <RemoveItem id={id} />
            </CardActions>
        </Card>
    )
}