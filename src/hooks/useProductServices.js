import {useState} from 'react';
export default function useProductServices(){
    const [openProductModal, setOpenProductModal] = useState(false);
    const [anchorSortByMenu, setAnchorSortByMenu] = useState(null);
    const open = Boolean(anchorSortByMenu);

    // Handles new product click
    const handleNewProductClick = () => {
        setOpenProductModal(true);
    }

    // Handles product modal on close
    const handleProductModalClose = () => {
        setOpenProductModal(false);
    }

    // Handles product filter click
    const handleSortByClick = e => {
        setAnchorSortByMenu(e.currentTarget);
    }

    // Handles product filter menu when closed
    const handleSortByMenuClose = () => {
        setAnchorSortByMenu(null);
    }

    return {
        openProductModal,
        setOpenProductModal,
        anchorSortByMenu,
        open,
        handleProductModalClose,
        handleNewProductClick,
        handleSortByClick,
        handleSortByMenuClose,
    }
}