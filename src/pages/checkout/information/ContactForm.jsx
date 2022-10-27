import {useContext} from 'react';
import {
    Box,
    Grid,
    FormGroup,
    Typography,
    InputLabel,
    FormControlLabel,
    Checkbox,
    Input,
    FormControl,
} from "@mui/material";
import {CheckoutContext} from '../../../context/CheckoutContext';
export default function ContactForm(){
    const {email, handleEmail} = useContext(CheckoutContext);
    return (
        <Grid item >
            <Typography variant="h6" component="h2" textAlign="left" sx={{marginBlock:"0.6em"}}>Contact information</Typography>
            <Box style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                gap:"0.8em"
            }}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="email">Email address</InputLabel>
                    <Input id="email" ref={email}  aria-describedby="email-text"  onChange={handleEmail} required />
                </FormControl>
                <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Email me with news and offers" sx={{margin:0}} />
                </FormGroup>
            </Box>
        </Grid>
    )
}