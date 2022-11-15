import {Button} from '@mui/material';
import useRemoveControl from '../../hooks/useRemoveControl';

export default function RemoveItem({id}){
    const {handleRemoveShoppingItem} = useRemoveControl(id)
    return (
        <Button variant="contained" color="error" onClick={handleRemoveShoppingItem}>
            Remove
        </Button>
    )
}