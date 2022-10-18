import {Grid, IconButton, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateBefore';
export default function Navigation({prevRoute, nextRoute}){
    return (
        <Grid container alignItems="center" justifyContent="space-between" >
            <Link to={`/${prevRoute}`}>
                <IconButton aria-label="previous">
                    <NavigateNextIcon />
                    <Typography variant="body1" component="p">Return to {prevRoute}</Typography>
                </IconButton>
            </Link>
            <Button variant="contained" color="success">
                Continue to {nextRoute}
            </Button>
        </Grid>
    )
}