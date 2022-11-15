import {useContext} from 'react';
import { CustomerContext } from '../../../context/CustomerContext';
import {TableCell, TableHead, TableRow, Checkbox} from '@mui/material';

// Static head cells. Replace with API call here...
const headCells =  [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email',
    },
    {
      id: 'Subscribed',
      numeric: true,
      disablePadding: false,
      label: 'Subscribed',
    },

    {
      id: 'edit-delete',
      numeric: true,
      disablePadding: false,
      label: '',
    }

];

export default function EnhancedTableHead() {
    const { handleSelectAllClick,  selected, rows} = useContext(CustomerContext);
    const numSelected = selected.length;
    const rowCount = rows.length;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={handleSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
            >
                {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
}