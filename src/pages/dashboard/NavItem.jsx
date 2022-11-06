import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';


export default function NavItem({text, icon}){
    return (
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}