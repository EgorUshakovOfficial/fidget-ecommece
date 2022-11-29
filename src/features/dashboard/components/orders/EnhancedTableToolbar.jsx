import {Toolbar, IconButton, Tooltip} from '@mui/material';
import {FilterList} from '@mui/icons-material';
import OrderFilter from './OrderFilter';

export default function EnhancedTableToolbar(){
    return (
        <Toolbar
            sx={{
                pl:{sm:1},
                pr:{xs:1, sm:1},
                justifyContent:"space-between"
            }}
        >
            <OrderFilter />
            <Tooltip title="Filter list">
                <IconButton>
                    <FilterList />
                </IconButton>
            </Tooltip>
        </Toolbar>
    )
}