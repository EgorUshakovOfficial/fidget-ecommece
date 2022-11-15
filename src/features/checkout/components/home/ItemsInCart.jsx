import {useContext} from 'react';
import {Grid, Badge, Box, Typography} from '@mui/material';
import {StateContext} from '../../../../context/StateContext';

export default function ItemsInCart(){
    const {cart} = useContext(StateContext);

    return (
        <Box style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"start",
            gap:"0.6em",
            borderBottom: "1px solid lightgray"
        }}
         >
            {cart.map(product =>
                (<Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Badge badgeContent={product.quantity} color="primary">
                                    <Box
                                        component="img"
                                        alt="Red fidget spinner"
                                        src={product.image}
                                        sx={{
                                            height: 64
                                        }}
                                    />
                                </Badge>
                            </Grid>

                            <Grid item>
                                <Typography variant="subtitle2" component="div">{product.name}</Typography>

                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2" component="span">
                                    ${(product.quantity*product.cost).toFixed(2)}
                                </Typography>
                            </Grid>
                 </Grid>))
            }
        </Box>
    )
}