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
import { CheckoutContext} from '../../../context/CheckoutContext';
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
        handleCountryRegion,
        handleFirstName,
        handleLastName,
        handleAddress,
        handleApartmentSuite,
        handlePostalCode,
        handleStateProvince,
        handleCity
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
                    <Input id="country-region" ref={countryRegion} aria-describedby="country-region-text" onChange={handleCountryRegion} required />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="first-name">First name</InputLabel>
                            <Input id="first-name" ref={firstName} aria-describedby="first-name-text" onChange={handleFirstName} required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="last-name">Last name</InputLabel>
                            <Input id="last-name" ref={lastName} aria-describedby="last-name-text" onChange={handleLastName} required />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl fullWidth>
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Input id="address" ref={address} aria-describedby="address-text" onChange={handleAddress} required />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="apartment">Apartment, suite, etc.(optional)</InputLabel>
                    <Input id="apartment" ref={apartmentSuite} aria-describedby="apartment-text" onChange={handleApartmentSuite} />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={4}  width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="postal-code">Postal code</InputLabel>
                            <Input id="postal-code" ref={postalCode} aria-describedby='postal-code-text' onChange={handlePostalCode} required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={4}  width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="state-province">State/Province</InputLabel>
                            <Input id="state-province" ref={stateProvince} aria-describedby='state-province-text' onChange={handleStateProvince} required />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={4} width="100%">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input id="city-text" ref={city} aria-describedby='city' onChange={handleCity} required />
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