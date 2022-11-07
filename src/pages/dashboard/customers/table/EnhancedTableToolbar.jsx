import {useContext} from 'react';
import { alpha } from '@mui/material/styles';
import {Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import {Delete, FilterList} from '@mui/icons-material';
import UserFilter from './UserFilter';
import {CustomerContext} from '../../../../context/CustomerContext';

export default function EnhancedTableToolbar() {
    const {selected} = useContext(CustomerContext);
    const numSelected = selected.length;
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
          <UserFilter />
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
