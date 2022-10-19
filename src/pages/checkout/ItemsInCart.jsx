import {Grid, Container, Badge, Box, Typography, Divider} from '@mui/material';
import yellowFidgetSpinner from '../../assets/images/fidget-spinner-yellow.jpg';
export default function ItemsInCart(){
    return (
        <Box style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"start",
            gap:"0.6em",
            borderBottom: "1px solid lightgray"
        }}
         >
            <Grid container alignItems="center" justifyContent="space-between">
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
                    <Typography variant="subtitle2" component="div">Yellow Fidget Spinner</Typography>
                    <Typography variant="body2">Description goes here...</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" component="span">
                        $5.99
                    </Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
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
                    <Typography variant="subtitle2" component="div">Yellow Fidget Spinner</Typography>
                    <Typography variant="body2" component="span">Description goes here...</Typography>
                </Box>
                <Typography variant="subtitle2" component="span">$5.99</Typography>
            </Grid>
        </Box>
    )
}