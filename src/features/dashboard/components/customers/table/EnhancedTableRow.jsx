import {useContext} from 'react';
import {TableCell, TableRow, Checkbox, IconButton, Tooltip} from '@mui/material';
import {MoreHoriz} from '@mui/icons-material';
import OptionsMenu from './OptionsMenu';
import {CustomerContext} from '../../../context/CustomerContext';

export default function EnhancedTableRow({
    labelId,
    handleSelectClick,
    row,
    isItemSelected,
}){
    const {open, handleOptionsClick} = useContext(CustomerContext);
    return (
      <TableRow
        hover
        onClick={(event) => handleSelectClick(event, row.name)}
        role="checkbox"
        key={row.name}
        selected={isItemSelected}
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={isItemSelected}
            inputProps={{}}
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
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.subscribed}</TableCell>
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
