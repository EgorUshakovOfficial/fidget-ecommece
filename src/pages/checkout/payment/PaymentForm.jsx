import {
    Box,
    Grid,
    Typography,
    InputLabel,
    Input,
    FormControl,
} from "@mui/material"
export default function PaymentForm(){
    return (
        <Grid item marginBlock="0.6em">
            <Typography variant="h6" component="h2" textAlign="left" sx={{marginBlock:"0.2em"}}>Credit Card</Typography>
            <Box style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                gap:"0.8em"
            }}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="card-number">Card number</InputLabel>
                    <Input id="card-number" aria-describedby="card-number-text" />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="cardholder-name">Cardholder name</InputLabel>
                    <Input id="cardholder-name" aria-describedby="cardholder-name-text" />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="expiration-date">Expiration Date</InputLabel>
                            <Input id="expiration-date" aria-describedby="expiration-date-text" />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="security-code">Security code</InputLabel>
                            <Input id="security-code" aria-describedby="security-code-text" />
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}