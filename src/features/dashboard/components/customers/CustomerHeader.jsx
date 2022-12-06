import {useContext} from 'react';
import {Box, Typography, Button} from '@mui/material';
import {Add} from '@mui/icons-material';
import { CustomerContext } from '../../context/CustomerContext';

export default function CustomerHeader(){
    const {setOpenNewUserForm} = useContext(CustomerContext);
    return (
        <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" component="h1">User</Typography>
            <Button
                onClick={() => setOpenNewUserForm(true)}
                variant="contained"
                color="primary"
                endIcon={<Add />}
            >
                New User
            </Button>
        </Box>
    )
}