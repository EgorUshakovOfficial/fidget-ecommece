import {Link} from 'react-router-dom';
import {Box} from '@mui/material';
import logo from '../../assets/images/logo.png';
export default function Logo(){
    return (
        <Link to="/">
            <Box
                component="img"
                sx={{
                    height: 56
                }}
                src={logo}
            />
        </Link>
    )
}