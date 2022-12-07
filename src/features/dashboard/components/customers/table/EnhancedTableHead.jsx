import {useContext} from 'react';
import { CustomerContext } from '../../../context/CustomerContext';
import {TableCell, TableHead, TableRow, Checkbox} from '@mui/material';

// Head cells
const headCells =  [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'email',
      numeric: false,
      disablePadding: false,
      label: 'Email',
    },
    {
      id:"address",
      numeric:false,
      disablePadding:false,
      label:"Address"
    },
    {
      id: 'Subscribed',
      numeric: false,
      disablePadding: false,
      label: 'Subscribed',
    },
    {
      id: 'edit-delete',
      numeric: false,
      disablePadding: false,
      label: '',
    }
];

export default function EnhancedTableHead() {
    const { handleSelectAllClick, totalCustomers, numSelectedCustomers} = useContext(CustomerContext);
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelectedCustomers > 0 && numSelectedCustomers < totalCustomers}
              checked={totalCustomers > 0 && numSelectedCustomers === totalCustomers}
              onChange={handleSelectAllClick}
            />
          </TableCell>
          {headCells.map(headCell => (
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