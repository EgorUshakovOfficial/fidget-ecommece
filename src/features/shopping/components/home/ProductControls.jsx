import {Box, IconButton} from '@mui/material';
import {Add, Remove} from '@mui/icons-material';
import useProductControls from "../../hooks/useProductControls"

export default function ProductControls({id, quantity}){
    const {handleIncrement, handleDecrement} = useProductControls(id);
    return (
        <Box>
            <IconButton variant="outlined" onClick={handleDecrement}>
                <Remove />
            </IconButton>
            <Box component="div" sx={{ display: 'inline', marginInline:"0.5em"}}>{quantity}</Box>
            <IconButton variant="outlined" onClick={handleIncrement}>
                <Add />
            </IconButton>
        </Box>
    )
}