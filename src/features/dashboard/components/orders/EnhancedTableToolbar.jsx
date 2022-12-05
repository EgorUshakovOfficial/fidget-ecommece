import {Fragment, useContext} from 'react';
import { alpha } from '@mui/material/styles';
import {Toolbar, IconButton, Typography, Tooltip} from '@mui/material';
import {Delete, FilterList} from '@mui/icons-material';
import OrderFilter from './OrderFilter';
import { OrderContext } from '../../context/OrderContext';

export default function EnhancedTableToolbar(){
    const {deleteSelectedOrdersOnClick, numOrdersSelected} = useContext(OrderContext);
    return (
        <Toolbar
        sx={{
            pl: { sm: 1 },
            pr: { xs: 1, sm: 1 },
            justifyContent:"space-between",
            ...(numOrdersSelected > 0 && {
              bgcolor: (theme) =>
                alpha(theme.palette.error.main, theme.palette.action.activatedOpacity),
            }),
          }}
        >
            {numOrdersSelected ?
                <Fragment>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {numOrdersSelected} orders selected
                    </Typography>
                    <Tooltip title="Delete">
                        <IconButton onClick={deleteSelectedOrdersOnClick}>
                            <Delete />
                        </IconButton>
                    </Tooltip>
                </Fragment>
                :
                <Fragment>
                    <OrderFilter />
                    <Tooltip title="Filter list">
                        <IconButton>
                            <FilterList />
                        </IconButton>
                    </Tooltip>
                </Fragment>
            }
        </Toolbar>
    )
}