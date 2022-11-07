import {
    TableCell,
    TableRow,
    Checkbox,
    IconButton
  } from '@mui/material';

import {MoreHoriz} from '@mui/icons-material';

export default function EnhancedTableRow({
    labelId,
    handleSelectClick,
    row,
    isItemSelected,
}){
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
        <TableCell align="right">
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </TableCell>
      </TableRow>
    )
}