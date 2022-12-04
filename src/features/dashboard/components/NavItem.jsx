import {useContext} from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { DashboardContext } from '../context/DashboardContext';

export default function NavItem({text, icon}){
    const {handlePageClick} = useContext(DashboardContext);
    return (
        <ListItem value={text} onClick={handlePageClick} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}