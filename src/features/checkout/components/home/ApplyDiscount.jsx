import {Box, TextField, Divider, Button} from '@mui/material';
export default function ApplyDiscount(){
    return (
        <Box
            style={{
                display:"grid",
                gridTemplateColumns: "2fr 1fr",
                gap:"0.6em"
            }}
        >
            <TextField label="Discount Code" size="small" variant="outlined" />
            <Button variant="contained" color="success">Apply</Button>
        </Box>
    )
}
