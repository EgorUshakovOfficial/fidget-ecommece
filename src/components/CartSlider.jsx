import {
    Drawer, 
    Grid, 
    Box, 
    Typography, 
    IconButton, 
    Divider, 
    Container,
    BottomNavigation, 
    Button
} 
from "@mui/material";
import redFidgetSpinner from '../assets/images/fidget-spinner-red.jpg'; 
import {Add, Close, Remove} from '@mui/icons-material'; 

export default function CartSlider(){
    return (
        <Drawer
            anchor="right"
            open={true}
            alignItems="space-betweeen"
        >
            <Container>
                <Box>
                    <Grid container justifyContent="space-between">
                        <Typography
                            variant="h4"
                            component="h2"
                        >
                            Cart
                        </Typography>
                        <IconButton>
                            <Close />
                        </IconButton>
                    </Grid>
                    <Divider sx={{marginBlock:"0.5em", overflow:"hidden"}} />
                </Box>
                <Box style={{height: "80vh"}}>
                    <Box sx={{display:"flex", gap:"0.6em"}}>
                        <Box
                            component="img" 
                            alt="Red Fidget Spinner"
                            src={redFidgetSpinner}
                            sx={{
                                height: "100px", 
                                objectFit:"cover", 
                             }}
                        />
                        <Box sx={{display:"flex", flexDirection:"column", gap:"0.2em", alignItems:"center", justifyContent:"space-evenly"}}>
                            <Typography variant="subtitle" textAlign="center" component="h3">
                                Red Fidget Spinner
                            </Typography>
                            <Box>
                                <IconButton variant="outlined">
                                    <Remove />
                                </IconButton>
                                <Box component="div" sx={{ display: 'inline', marginInline:"0.5em"}}>12</Box>
                                <IconButton variant="outlined">
                                    <Add />
                                </IconButton>
                            </Box>
                            <Typography variant="subtitle" component="p" style={{display:"flex", width:"100%", justifyContent:"flex-end"}}>
                                $65.34
                            </Typography>
                         </Box>
                    </Box>
                    <Divider sx={{marginBlock:"0.5em"}} />
                    <Box sx={{display:"flex", gap:"0.6em", marginTop:"0.6em"}}>
                        <Box
                            component="img" 
                            alt="Red Fidget Spinner"
                            src={redFidgetSpinner}
                            sx={{
                                height: "100px", 
                                objectFit:"cover", 
                             }}
                        />
                        <Box sx={{display:"flex", flexDirection:"column", gap:"0.2em", alignItems:"center", justifyContent:"space-evenly"}}>
                            <Typography variant="subtitle" textAlign="center" component="h3">
                                Red Fidget Spinner
                            </Typography>
                            <Box>
                                <IconButton variant="outlined">
                                    <Remove />
                                </IconButton>
                                <Box component="div" sx={{ display: 'inline', marginInline:"0.5em"}}>12</Box>
                                <IconButton variant="outlined">
                                    <Add />
                                </IconButton>
                            </Box>
                            <Typography variant="subtitle" component="p" style={{display:"flex", width:"100%", justifyContent:"flex-end"}}>
                                $65.34
                            </Typography>
                         </Box>
                    </Box>
                </Box>
                <Divider sx={{marginBlock:"0.5em"}} />
                <Box>
                    <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <Typography variant="subtitle" element="h3" style={{marginBottom:"0.5em"}}>Total</Typography>
                        <Typography variant="subtitle" element="h3" style={{marginBottom:"0.5em"}}>$65.35</Typography>
                    </Box>
                    <Button variant="contained" color="success" size="large" fullWidth={true}>Check Out</Button>
                </Box>
            </Container>
        </Drawer>
    )
}