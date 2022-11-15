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
} from "@mui/material"
import { CheckoutContext} from '../../context/CheckoutContext';
export default function ShippingForm(){
    const {
        countryRegion,
        firstName,
        lastName,
        address,
        apartmentSuite,
        postalCode,
        stateProvince,
        city,
        setCountryRegion,
        setFirstName,
        setLastName,
        setAddress,
        setApartmentSuite,
        setPostalCode,
        setStateProvince,
        setCity
    } = useContext(CheckoutContext);

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
                    <Input id="country-region" value={countryRegion}  aria-describedby="country-region-text" onChange={e => setCountryRegion(e.target.value)} required />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="first-name">First name</InputLabel>
                            <Input id="first-name" value={firstName} aria-describedby="first-name-text" onChange={e => setFirstName(e.target.value)} required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="last-name">Last name</InputLabel>
                            <Input id="last-name" value={lastName} aria-describedby="last-name-text" onChange={e => setLastName(e.target.value)} required />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl fullWidth>
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Input id="address" value={address} aria-describedby="address-text" onChange={e => setAddress(e.target.value)} required />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="apartment">Apartment, suite, etc.(optional)</InputLabel>
                    <Input id="apartment" value={apartmentSuite} aria-describedby="apartment-text" onChange={e => setApartmentSuite(e.target.value)} />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={4}  width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="postal-code">Postal code</InputLabel>
                            <Input id="postal-code" value={postalCode} aria-describedby='postal-code-text'  onChange={e => setPostalCode(e.target.value)} required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={4}  width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="state-province">State/Province</InputLabel>
                            <Input id="state-province" value={stateProvince} aria-describedby='state-province-text' onChange={e => setStateProvince(e.target.value)} required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={4} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input id="city-text" value={city} aria-describedby='city' onChange={e => setCity(e.target.value)} required />
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