import {Grid, Container, Badge, Box, Typography, Divider} from '@mui/material';
import yellowFidgetSpinner from '../../assets/images/fidget-spinner-yellow.jpg';
export default function ItemsInCart(){
    return (
        <Box style={{display:"flex", flexDirection:"column", gap:"0.6em"}}>
            <Grid container columnSpacing={4} justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Badge badgeContent={2} color="primary">
                        <Box
                            component="img"
                            alt="Red fidget spinner"
                            src={yellowFidgetSpinner}
                            sx={{
                                height: 64
                            }}
                        />
                    </Badge>
                </Grid>

                <Grid item>
                    <Typography variant="h5" component="p">Yellow Fidget Spinner</Typography>
                    <Typography variant="subtitle" component="p">Description goes here...</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" component="span">
                        $5.99
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
                <Badge badgeContent={2} color="primary">
                    <Box
                        component="img"
                        alt="Red fidget spinner"
                        src={yellowFidgetSpinner}
                        sx={{
                            height: 64
                        }}
                    />
                </Badge>
                <Box>
                    <Typography variant="h5" component="p">Yellow Fidget Spinner</Typography>
                    <Typography variant="subtitle" component="p">Description goes here...</Typography>
                </Box>
                <Typography variant="h5" component="span">$5.99</Typography>
            </Grid>
        </Box>
    )
}