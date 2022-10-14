import {
    Drawer, 
    Box, 
    Typography, 
    IconButton, 
    Container,
    Button
} 
from "@mui/material";
import redFidgetSpinner from '../assets/images/fidget-spinner-red.jpg'; 
import {Add, Close, Remove} from '@mui/icons-material'; 

export default function CartSlider(){
    return (
        <Drawer
            anchor="right"
            open={false}
        >
            <Container>
                <Box sx={{
                    display:"flex", 
                    alignItems:"center", 
                    justifyContent:"space-between", 
                }}>
                    <Typography variant="h4" component="h2">
                        Cart 
                    </Typography>
                    <IconButton>
                        <Close />
                    </IconButton>
                </Box>
                <Box style={{
                    minHeight: "calc(100vh - 73px - 1em - 42px - 0.4em)", 
                    borderTop:"1px solid rgba(0, 0, 0, 0.12)",
                    borderBottom:"1px solid rgba(0, 0, 0, 0.12)", 
                }}>
                    <Box sx={{
                        display:"flex", 
                        gap:"0.2em", 
                        paddingBlock:"0.8em",
                        borderBottom:"1px solid rgba(0, 0, 0, 0.12)", 
                    }}>
                        <Box
                            component="img"
                            src={redFidgetSpinner}
                            sx={{
                                height: '100px'
                            }} 
                            alt="Red Fidget Spinner"
                        />
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <Typography variant="subtitle"  component="h3">
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
                            <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                                <Typography variant="body1" component="p">
                                    Cost
                                </Typography>
                                <Typography variant="body1" component="p">
                                    63.12
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display:"flex", gap:"0.2em",
                        paddingBlock: "0.5em",
                        borderBottom:"1px solid rgba(0, 0, 0, 0.12)", 

                    }}>
                        <Box
                            component="img"
                            src={redFidgetSpinner}
                            sx={{
                                height: '100px'
                            }} 
                            alt="Red Fidget Spinner"
                        />
                        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <Typography variant="subtitle"  component="h3">
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
                            <Box sx={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                                <Typography variant="body1" component="p">
                                    Cost
                                </Typography>
                                <Typography variant="body1" component="p">
                                    63.12
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    position:"absolute", 
                    top:"calc(100% - 72.64px - 1em)", 
                    left:"0", 
                    width:"100%",
                    padding:"0 24px",
                    boxSizing:"border-box", 
                }}>
                    <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"0.4em"}}>
                        <Typography variant="body1" element="p">Total</Typography>
                        <Typography variant="body1" element="p">121.21</Typography>
                    </Box>
                    <Button variant="contained" color="success" size="large" fullWidth={true}>Check Out</Button>
                </Box>
            </Container>
        </Drawer>
    )
}