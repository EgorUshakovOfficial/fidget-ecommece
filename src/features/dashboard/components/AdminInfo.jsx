import {Box, Avatar, Typography} from '@mui/material';
export default function AdminInfo(){
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            paddingBlock="0.8em"
            paddingInline="1.5em"
        >
            <Avatar sx={{ backgroundColor:"purple" }}>EU</Avatar>
            <Typography component="p">Egor Ushakov</Typography>
        </Box>
    )
}