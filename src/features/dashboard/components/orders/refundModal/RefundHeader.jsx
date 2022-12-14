import {Box, Typography, IconButton} from "@mui/material";
import {Reply, Close} from '@mui/icons-material';

export default function RefundHeader(){
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="0.5em"
        >
            <Typography component="h3" variant="h6">
                <Reply />
                Refund
            </Typography>
            <IconButton>
                <Close />
            </IconButton>
        </Box>
    )
}