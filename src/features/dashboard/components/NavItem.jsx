import {useContext} from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { PageContext } from '../context/PageContext';

export default function NavItem({text, icon}){
    const {handlePageClick} = useContext(PageContext);
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