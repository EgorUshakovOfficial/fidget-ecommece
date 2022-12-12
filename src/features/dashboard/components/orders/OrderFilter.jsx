
import {useContext} from 'react';
import {Paper, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { OrderContext } from '../../context/OrderContext';

export default function OrderFilter(){
    const {handleOrderFilterChange, orderFilter} = useContext(OrderContext);
    return (
        <Paper
            elevation={orderFilter==="" ? 0 : 2}
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                paddingBlock:"0.4em",
                border:"1px solid lightgray"
            }}
        >
            <InputBase
                sx={{ml:1, flex:1}}
                placeholder="Search order"
                onChange={handleOrderFilterChange}
                // inputProps={{onChange: handleOrderFilterChange}}
            />
            <SearchIcon />
        </Paper>
    )
}