import {Modal, Box, Typography, TableContainer, Table, TableHead, TableBody} from '@mui/material';
import {Reply} from '@mui/icons-material';
import RefundHeader from './RefundHeader';
import HeadCells from './HeadCells';
import OrderItems from './OrderItems';
import RefundSummary from './RefundSummary';
import RefundControls from './RefundControls';

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
    return(
        <Modal
            open={true}
            onClose={() => {}}
        >
            <Box sx={style}>
                <RefundHeader />
                <TableContainer>
                    <Table size="small">
                        <TableHead>
                            <HeadCells />
                        </TableHead>
                        <TableBody>
                            <OrderItems />
                            <RefundSummary />
                        </TableBody>
                    </Table>
                </TableContainer>
                <RefundControls />
            </Box>
        </Modal>
    )
}