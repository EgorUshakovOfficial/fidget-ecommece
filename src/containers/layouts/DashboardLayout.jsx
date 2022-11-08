import {Fragment} from 'react';
import {useMediaQuery, Container, Box} from '@mui/material';
import Navbar from '../../pages/dashboard/Navbar';
import { DRAWER_WIDTH } from '../../utils/constants';
import {useTheme} from '@mui/material/styles';

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