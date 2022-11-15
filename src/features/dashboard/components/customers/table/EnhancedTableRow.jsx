import {useContext} from 'react';
import {
    TableCell,
    TableRow,
    Checkbox,
    IconButton
  } from '@mui/material';

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
          <IconButton
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOptionsClick}
          >
            <MoreHoriz />
          </IconButton>
          <OptionsMenu />
        </TableCell>
      </TableRow>
    )
}

      /* <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleOptionsClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button> */