import Button from '@mui/material/Button';
import { AddShoppingCart } from '@mui/icons-material';

export default function CartButton(){
    return (
        <Button variant="outline">
            <AddShoppingCart />
        </Button>
    )
}