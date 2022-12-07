import {useContext} from 'react';
import {
  Box,
  Table,
  TableContainer,
  TablePagination,
  Paper,
  Typography
} from '@mui/material';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableRows from './EnhancedTableRows';
import {CustomerContext} from '../../../context/CustomerContext';

export default function CustomerTable(){
  const {
    totalCustomers,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage
  } = useContext(CustomerContext);


  return (
    <Box sx={{ width: '100%', marginTop:"0.8em"}}>
      {totalCustomers > 0 ?
      <Paper elevation={0} sx={{ width: '100%', mb: 2, border:"1px solid lightgray" }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table size='medium'>
            <EnhancedTableHead />
            <EnhancedTableRows />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalCustomers}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      :
      <Typography>No customers are registered</Typography>
      }
    </Box>
  );
}