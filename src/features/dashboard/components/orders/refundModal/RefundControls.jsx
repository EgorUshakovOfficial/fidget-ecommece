import {useContext} from 'react';
import {Box, Button} from '@mui/material';
import { OrderContext } from '../../../context/OrderContext';

export default function RefundControls({
    orderItemsSelected,
    refundOrderOnClick,
    cancelOrderRefund
}){
    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            gap="0.25em"
            marginTop="0.5em"
        >
            <Button
                size="medium"
                variant="contained"
                disableRipple
                onClick={cancelOrderRefund}
            >
                Cancel
            </Button>
            <Button
                color="success"
                variant="contained"
                size="medium"
                disableRipple
                disabled={orderItemsSelected.length === 0}
                onClick={refundOrderOnClick}
            >
                Refund
            </Button>
        </Box>
    )
};