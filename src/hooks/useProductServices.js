import {useRef, useState} from 'react';
export default function useProductServices(){
    const [anchorSortByMenu, setAnchorSortByMenu] = useState(null);
    const open = Boolean(anchorSortByMenu);

    // Handles product filter click
    const handleSortByClick = e => {
        setAnchorSortByMenu(e.currentTarget);
    }

    // Handles product filter menu when closed
    const handleSortByMenuClose = e => {
        setAnchorSortByMenu(null);
    }

    return {
        anchorSortByMenu,
        open,
        handleSortByClick,
        handleSortByMenuClose
    }
}