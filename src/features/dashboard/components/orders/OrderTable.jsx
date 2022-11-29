import {Box, Paper, Table, TableContainer} from '@mui/material';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableTooltip from './EnhancedTableToolbar';
import EnhancedTableRows from './EnhancedTableRows';

export default function OrderTable(){
    return (
        <Box
            sx={{
                width:"100%",
                marginTop:"0.8em"
            }}
        >
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
            </Paper>
        </Box>
    )
}