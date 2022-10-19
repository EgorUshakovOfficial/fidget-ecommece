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
            <Typography variant="h5" component="h2" sx={{marginBlock:"0.6em"}}>Shipping Address</Typography>
            <Box style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                gap:"0.8em"
            }}>
                <FormControl fullWidth>
                    <InputLabel id="country-region-label">Country/Region</InputLabel>
                    <Select
                        labelId="country-region-label"
                        id="country-region-select"
                        value={countryOrRegion}
                        label="Country/Region"
                        onChange={handleCountryOrRegionChange}
                    >
                        <MenuItem value="canada">Canada</MenuItem>
                        <MenuItem value="us">US</MenuItem>
                        <MenuItem value="germany">Germany</MenuItem>
                        <MenuItem value="portugal">Portugal</MenuItem>
                    </Select>
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="first-name">First name</InputLabel>
                            <Input id="first-name" aria-describedby="first-name-text" />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="last-name">Last name</InputLabel>
                            <Input id="last-name" aria-describedby="last-name-text" />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl fullWidth>
                    <InputLabel htmlFor="address">Address</InputLabel>
                    <Input id="address" aria-describedby="address-text" />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="apartment">Apartment, suite, etc.(optional)</InputLabel>
                    <Input id="apartment" aria-describedby="apartment-text" />
                </FormControl>
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="postal-code">Postal code</InputLabel>
                            <Input id="postal-code" aria-describedby='postal-code-text' />
                        </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input id="city-text" aria-describedby='city' />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Save this information for next time" />
                </FormGroup>
            </Box>
        </Grid>
    )
}