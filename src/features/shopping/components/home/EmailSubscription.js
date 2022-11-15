
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Container,
    Button,
    FormGroup
}
from "@mui/material";
export default function EmailSubscription(){
    return (
        <Container maxWidth="lg" sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly",
            alignItems:"center",
            gap:"0.4em",
            paddingBlock:"16px"
        }}>
            <Typography variant="h4" component="h2">
                Sign up and save
            </Typography>
            <Typography variant="body1" component="p">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals
            </Typography>
            <form action="#" method="POST">
                <Box
                    sx={{
                        display:"flex",
                        justifyContent: "center",
                        gap:"0.1em"
                    }}
                >
                    <TextField label="Enter in your email" size="small" variant="outlined" />
                    <Button variant="contained" color="success">Subscribe</Button>
                </Box>
            </form>
        </Container>
    )
}