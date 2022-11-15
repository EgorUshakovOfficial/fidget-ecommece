import {Box, Typography, Button} from '@mui/material';
import {Add} from '@mui/icons-material';

export default function CustomerHeader(){
    return (
        <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" component="h1">User</Typography>
            <Button variant="contained" color="primary" endIcon={<Add />}>
                New User
            </Button>
        </Box>
    )
}