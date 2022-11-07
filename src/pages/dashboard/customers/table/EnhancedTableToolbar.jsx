import * as React from 'react';
import { alpha } from '@mui/material/styles';
import {Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import {Delete, FilterList} from '@mui/icons-material';
import UserFilter from './UserFilter';

export default function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          justifyContent:"space-between",
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.error.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <UserFilter
            userFilter={props.userFilter}
            handleUserFilterChange={props.handleUserFilterChange}
          />
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <Delete />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterList />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
}
