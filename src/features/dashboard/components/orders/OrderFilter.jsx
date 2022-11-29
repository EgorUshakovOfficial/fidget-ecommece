import {Paper, InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function OrderFilter(){
    return (
        <Paper
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
                inputProps={{}}
            />
            <SearchIcon />
        </Paper>
    )
}