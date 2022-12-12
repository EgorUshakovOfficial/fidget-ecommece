import {useContext} from 'react';
import {Box, Paper, Table, TableContainer, TablePagination, Typography} from '@mui/material';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableTooltip from './EnhancedTableToolbar';
import EnhancedTableRows from './EnhancedTableRows';
import { OrderContext } from '../../context/OrderContext';

export default function OrderTable(){
    const {numOrders, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage} = useContext(OrderContext);

    return (
        <Box
            sx={{
                width:"100%",
                marginTop:"0.8em"
            }}
        >
        {numOrders > 0 ?
            <Paper elevation={0} sx={{width:"100%", mb:2, border:"1px solid lightgray"}}>
                <EnhancedTableTooltip />
                <TableContainer>
                    <Table
                        aria-labelledby="order-table"
                        size="medium"
                    >
                        <EnhancedTableHead />
                        <EnhancedTableRows />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={numOrders}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            :
            <Typography>No orders have been placed yet</Typography>
        }
        </Box>
    )
}