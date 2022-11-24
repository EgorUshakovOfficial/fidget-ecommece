import {Fragment} from 'react';
import {useTheme} from '@mui/material/styles';
import {useMediaQuery, Container, Box} from '@mui/material';
import Navbar from '../components/Navbar';
import { DRAWER_WIDTH } from '../../../data/constants';

export default function CheckooutLayout({children}){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Fragment>
            <Navbar />
            <Box sx={{
                width: matches ? `calc(100% - ${DRAWER_WIDTH}px)` : "100%",
                marginLeft:"auto",
                paddingBlock:"2.6em",
                marginTop:"64px"
            }}>
                <Container>
                    {children}
                </Container>
            </Box>
        </Fragment>
    )
}