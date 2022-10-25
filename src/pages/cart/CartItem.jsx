import {Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography
}
from '@mui/material';
import ProductControls from '../../components/ProductControls';
import RemoveItem from './RemoveItem';
export default function CartItem({
    id,
    name,
    image,
    cost,
    quantity
}){
    return(
        <Card sx={{maxWidth:345}}>
            <CardMedia
                component="img"
                height="194"
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