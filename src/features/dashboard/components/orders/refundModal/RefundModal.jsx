import {Modal, Box, TableContainer, Table, TableHead, TableBody} from '@mui/material';
import RefundHeader from './RefundHeader';
import HeadCells from './HeadCells';
import OrderItems from './OrderItems';
import RefundSummary from './RefundSummary';
import RefundControls from './RefundControls';
import useOrderRefundModal from '../../../hooks/useOrderRefundModal';

// Styles
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius:"0.5em",
    border: '1px solid lightgray',
    boxShadow: 24,
    p: 4,
};

export default function RefundModal(){
    const orderRefundProps = useOrderRefundModal();

    return(
        <Modal
            open={true}
            onClose={() => {}}
        >
            <Box sx={style}>
                <RefundHeader cancelOrderRefund={orderRefundProps.cancelOrderRefund} />
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <HeadCells />
                        </TableHead>
                        <TableBody>
                            <OrderItems
                                selectOrderItem={orderRefundProps.selectOrderItem}
                                orderItemsSelected={orderRefundProps.orderItemsSelected}
                            />
                            <RefundSummary
                                subtotal={orderRefundProps.subtotal}
                            />
                        </TableBody>
                    </Table>
                </TableContainer>
                <RefundControls
                    orderItemsSelected={orderRefundProps.orderItemsSelected}
                    cancelOrderRefund={orderRefundProps.cancelOrderRefund}
                />
            </Box>
        </Modal>
    )
}