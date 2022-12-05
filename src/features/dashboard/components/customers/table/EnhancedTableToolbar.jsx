import {Fragment, useContext} from 'react';
import { alpha } from '@mui/material/styles';
import {Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import {Delete, FilterList} from '@mui/icons-material';
import UserFilter from './UserFilter';
import {CustomerContext} from '../../../context/CustomerContext';

export default function EnhancedTableToolbar() {
    const {deleteUsersOnClick, numSelectedCustomers} = useContext(CustomerContext);

    return (
      <Toolbar
        sx={{
          pl: { sm: 1 },
          pr: { xs: 1, sm: 1 },
          justifyContent:"space-between",
          ...(numSelectedCustomers > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.error.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelectedCustomers > 0 ?
          <Fragment>
            <Typography
              sx={{ flex: '1 1 100%' }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              {numSelectedCustomers} selected
            </Typography>
            <Tooltip title="Delete">
              <IconButton onClick={deleteUsersOnClick}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Fragment>
          :
          <Fragment>
            <UserFilter />
            <Tooltip title="Filter list">
              <IconButton>
                <FilterList />
              </IconButton>
            </Tooltip>
          </Fragment>
        }
      </Toolbar>
    );
}
