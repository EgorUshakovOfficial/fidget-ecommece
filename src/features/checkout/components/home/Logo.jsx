import {Link} from 'react-router-dom';
import {Box, Grid} from '@mui/material';
import logo from '../../../../assets/images/logo.png';
export default function Logo(){
    return (
        <Grid item container justifyContent="start">
            <Link to="/">
                <Box
                    component="img"
                    sx={{
                        height: 56
                    }}
                    src={logo}
                />
            </Link>
        </Grid>
    )
}