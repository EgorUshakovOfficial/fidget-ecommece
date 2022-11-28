import {Typography } from '@mui/material';
import {Link} from 'react-router-dom';
export default function ContinueShopping(){
    return (
        <Link to="/">
            <Typography
                color="black"
                sx={{textDecoration:"underline"}}
            >
                    Continue Shopping
            </Typography>
        </Link>
    );
}