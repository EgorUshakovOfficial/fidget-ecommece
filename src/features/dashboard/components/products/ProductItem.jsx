import {useContext} from 'react';
import {Grid, Paper, Box, IconButton, Tooltip, Typography, Badge} from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';
import {ProductContext} from '../../context/ProductContext';
export default function ProductItem({
    _id,
    title,
    price,
    stock,
    imageUrl
}){
    const {setDeleteProductId, setEditProductId} = useContext(ProductContext);
    return (
        <Grid item xs={12} md={6} lg={4} id={_id}>
            <Badge
                color="error"
                badgeContent="Sold out"
                invisible={stock !== 0}
            >
                <Paper sx={{height:"100%"}}>
                    <Box
                        component="img"
                        alt="Red fidget spinner"
                        loading="lazy"
                        src={imageUrl}
                        sx={{
                            height:"auto",
                            width:"100%"
                        }}
                    />
                    <Box>
                        <Typography variant="h5" component="h3">{title}</Typography>
                        <Typography variant="h5" component="h3" fontWeight="600">${price}</Typography>
                        <Box sx={{
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-around"
                        }}>
                            <Typography variant="h6"><strong>Quantity: {stock}</strong></Typography>
                            <Box>
                                <Tooltip title="Edit" onClick={() => setEditProductId(_id)}>
                                    <IconButton>
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete" onClick={() => setDeleteProductId( _id)}>
                                    <IconButton>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Badge>
        </Grid>
    )
}