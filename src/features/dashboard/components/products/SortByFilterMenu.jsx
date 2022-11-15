import {useContext} from 'react';
import {Menu, MenuItem} from '@mui/material';
import {ProductContext} from '../../context/ProductContext';

export default function SortByFilterMenu(){
    const {open, anchorSortByMenu, handleSortByMenuClose} = useContext(ProductContext);
    return (
        <Menu
            id="sortby-filter-menu"
            anchorEl={anchorSortByMenu}
            open={open}
            onClose={handleSortByMenuClose}
            keepMounted
            MenuListProps={{'aria-labelledby': 'sortby-filter-button' }}
        >
            <MenuItem onClick={handleSortByMenuClose}>Newest</MenuItem>
            <MenuItem onClick={handleSortByMenuClose}>Price:High-Low</MenuItem>
            <MenuItem onClick={handleSortByMenuClose}>Price:Low-High</MenuItem>
        </Menu>
    )
}