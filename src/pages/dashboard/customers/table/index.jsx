import {useState} from 'react';
import useCustomerService from '../../../../hooks/useCustomerService';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';


function createData(
  name,
  email,
  subscribed,
){
  return {
    name,
    email,
    subscribed,
  };
}

const rows = [
  createData('Albert Einstein', 'alberteinstein@gmail.com', 'Yes'),
  createData('James Bond', 'jamesbond@gmail.com', 'No'),
  createData('Lebron James', 'lebronjames@gmail.com', 'No'),
  createData('Andrew Tate', 'andrewtate@gmail.com','No'),
  createData('Bernardo Epp', 'bernardoepp@gmail.com', 'Yes'),
  createData('Albert Einstein', 'alberteinstein@gmail.com', 'Yes'),
  createData(' Bond', 'jamesbond@gmail.com', 'No'),
  createData('Lebron James', 'lebronjames@gmail.com', 'No'),
  createData('Andrew Tate', 'andrewtate@gmail.com','No'),
  createData('Bernardo Epp', 'bernardoepp@gmail.com', 'Yes'),
  createData('Albert Einstein', 'alberteinstein@gmail.com', 'Yes'),
  createData('James Bond', 'jamesbond@gmail.com', 'No'),
  createData('Lebron James', 'lebronjames@gmail.com', 'No'),
  createData('Andrew Tate', 'andrewtate@gmail.com','No'),
  createData('Bernardo Epp', 'bernardoepp@gmail.com', 'Yes'),
];

export default function CustomerTable(){
  const {
    userFilter,
    selected,
    page,
    rowsPerPage,
    handleSelectAllClick,
    handleSelectClick,
    handleChangePage,
    handleChangeRowsPerPage,
    handleUserFilterChange,
    filterRows,
    isSelected,
    emptyRows
  } = useCustomerService(rows);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          userFilter={userFilter}
          handleUserFilterChange={handleUserFilterChange}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .filter(row => filterRows(row.name, row.email, row.subscribed))
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleSelectClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.subscribed}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
