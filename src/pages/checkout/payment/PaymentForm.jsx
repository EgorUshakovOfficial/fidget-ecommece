import {useContext} from 'react';
import {
    Grid,
    Typography,
    InputLabel,
    Input,
    FormControl,
    IconButton,
    Box,
    Button
} from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateBefore';
import {CheckoutContext} from '../../../context/CheckoutContext';
export default function PaymentForm(){
    const {
        cardNumber,
        cardHolderName,
        expirationDate,
        securityCode,
        handleCardNumber,
        handleCardHolderName,
        handleExpirationDate,
        handleSecurityCode,
        payOnSubmit
    } = useContext(CheckoutContext);
    return (
        <Grid item marginBlock="0.6em">
            <Typography variant="h6" component="h2" textAlign="left" sx={{marginBlock:"0.2em"}}>Credit Card</Typography>
            <form style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-evenly",
                    gap:"0.8em"
                }}
                onSubmit={payOnSubmit}
            >
                <FormControl fullWidth>
                    <InputLabel htmlFor="card-number">Card number</InputLabel>
                    <Input id="card-number" ref={cardNumber} aria-describedby="card-number-text" onChange={handleCardNumber} required />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="cardholder-name">Cardholder name</InputLabel>
                    <Input id="cardholder-name" ref={cardHolderName} aria-describedby="cardholder-name-text" onChange={handleCardHolderName} required />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="expiration-date">Expiration Date</InputLabel>
                            <Input id="expiration-date" ref={expirationDate} aria-describedby="expiration-date-text" onChange={handleExpirationDate} required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="security-code">Security code</InputLabel>
                            <Input id="security-code" ref={securityCode} aria-describedby="security-code-text" onChange={handleSecurityCode} required />
                        </FormControl>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="center" gap="0.2em">
                        <IconButton aria-label="previous" >
                            <NavigateNextIcon size="large" />
                        </IconButton>
                        <Typography variant="body1" component="p">Return to shipping</Typography>
                    </Box>
                    <Button variant="contained" type="submit" color="success" size="small">
                        Pay now
                    </Button>
                </Box>
            </form>
        </Grid>
    )
}