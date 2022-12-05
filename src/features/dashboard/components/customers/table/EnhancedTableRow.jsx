import {useContext} from 'react';
import {TableCell, TableRow, Checkbox, IconButton, Tooltip} from '@mui/material';
import {MoreHoriz} from '@mui/icons-material';
import OptionsMenu from './OptionsMenu';
import {CustomerContext} from '../../../context/CustomerContext';

export default function EnhancedTableRow({customer}){
    const {
      handleSelectClick,
      isSelected,
      handleOptionsClick
    } = useContext(CustomerContext);

    // Customer's fullname
    let fullName = `${customer.firstName} ${customer.lastName}`;

    return (
      <TableRow
        hover
        onClick={event => handleSelectClick(event, customer._id)}
        role="checkbox"
        selected={isSelected(customer._id)}
      >
        <TableCell padding="checkbox">
          <Checkbox color="primary" checked={isSelected(customer._id)} />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          padding="none"
        >
          {fullName}
        </TableCell>
        <TableCell align="left">{customer.email}</TableCell>
        <TableCell align="left">{customer.isSubscribed ? "Yes" : "No"}</TableCell>
        <TableCell align="right">
          <Tooltip title="Edit or delete">
            <IconButton onClick={handleOptionsClick}>
              <MoreHoriz />
            </IconButton>
          </Tooltip>
          <OptionsMenu />
        </TableCell>
      </TableRow>
    )
}
