import {Grid, IconButton, Typography, Button, Box} from '@mui/material';
import {Link} from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateBefore';
export default function Navigation({prevRoute, nextRoute}){
    return (
        <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" gap="0.2em">
                <IconButton aria-label="previous" >
                    <NavigateNextIcon size="large" />
                </IconButton>
                <Typography variant="body1" component="p">Return to {prevRoute}</Typography>
            </Box>
            <Button variant="contained" color="success" size="small">
                Continue to {nextRoute}
            </Button>
        </Box>
    )
}