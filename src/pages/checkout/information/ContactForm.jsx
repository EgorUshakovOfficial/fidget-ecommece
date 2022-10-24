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
export default function ContactForm(){
    const [countryOrRegion, setCountryOrRegion] = useState('')

    const handleCountryOrRegionChange = e => {
        setCountryOrRegion(e.target.value);
    }

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
                    <InputLabel htmlFor="country-region">Email address</InputLabel>
                    <Input id="country-region" aria-describedby="country-region-text" />
                </FormControl>
                <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Email me with news and offers" />
                </FormGroup>
            </Box>
        </Grid>
    )
}