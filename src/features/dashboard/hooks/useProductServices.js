import {useState, useMemo, useEffect} from 'react';
import {api} from '../../../lib/api';

export default function useProductServices(){
    const [openAddProductModal, setAddOpenProductModal] = useState(false);
    const [openDeleteProductModal, setOpenDeleteProductModal] = useState(false);
    const [anchorSortByMenu, setAnchorSortByMenu] = useState(null);
    const [error, setError] = useState('');

    const open = Boolean(anchorSortByMenu);

    // Handles new product click
    const handleNewProductClick = () => {
        setAddOpenProductModal(true);
    }

    // Closes add product modal
    const handleAddProductModalClose = () => {
        setAddOpenProductModal(false);
    }

    // Handles delete product click
    const handleDeleteIconClick = () => {
        setOpenDeleteProductModal(true);
    }

    // Closes delete product modal
    const handleDeleteProductModalClose = () => {
        setOpenDeleteProductModal(false);
    }

    // Handles product filter click
    const handleSortByClick = e => {
        setAnchorSortByMenu(e.currentTarget);
    }

    // Closes product filter menu
    const handleSortByMenuClose = () => {
        setAnchorSortByMenu(null);
    }

    return {
        openAddProductModal,
        setAddOpenProductModal,
        openDeleteProductModal,
        anchorSortByMenu,
        open,
        handleAddProductModalClose,
        handleNewProductClick,
        handleDeleteIconClick,
        handleDeleteProductModalClose,
        handleSortByClick,
        handleSortByMenuClose,
    }
}