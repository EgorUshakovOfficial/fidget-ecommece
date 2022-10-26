import {useState} from 'react';
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
    Select,
    MenuItem,
    Divider
} from "@mui/material"
export default function ShippingForm(){
    const [countryOrRegion, setCountryOrRegion] = useState('')

    const handleCountryOrRegionChange = e => {
        setCountryOrRegion(e.target.value);
    }

    return (
        <Grid item >
            <Typography variant="h6" component="h2" textAlign="left" sx={{marginBlock:"0.6em"}}>Shipping Address</Typography>
            <Box style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                gap:"0.8em"
            }}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="country-region">Country/Region</InputLabel>
                    <Input id="country-region" aria-describedby="country-region-text" required />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="first-name">First name</InputLabel>
                            <Input id="first-name" aria-describedby="first-name-text" required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="last-name">Last name</InputLabel>
                            <Input id="last-name" aria-describedby="last-name-text" required />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl fullWidth>
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Input id="address" aria-describedby="address-text" required />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="apartment">Apartment, suite, etc.(optional)</InputLabel>
                    <Input id="apartment" aria-describedby="apartment-text" />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={4}  width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="postal-code">Postal code</InputLabel>
                            <Input id="postal-code" aria-describedby='postal-code-text' required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={4}  width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="state-province">State/Province</InputLabel>
                            <Input id="state-province" aria-describedby='state-province-text' required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={4} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input id="city-text" aria-describedby='city' required />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormGroup>
                        <FormControlLabel control={<Checkbox  />} sx={{margin:0}}label="Save this information for next time" />
                </FormGroup>
            </Box>
        </Grid>
    )
}