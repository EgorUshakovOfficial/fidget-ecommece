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

];

export default function EnhancedTableHead(props) {
    const { onSelectAllClick,  numSelected, rowCount} = props;
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
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