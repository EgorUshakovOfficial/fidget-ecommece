import {useState, useMemo, useEffect} from 'react';

export default function useProductServices(){
    const [openAddProductModal, setAddOpenProductModal] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState('');
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

    // Closes delete product modal
    const handleDeleteProductModalClose = () => {
        setDeleteProductId("");
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
        deleteProductId,
        setDeleteProductId,
        anchorSortByMenu,
        open,
        handleAddProductModalClose,
        handleNewProductClick,
        // handleDeleteIconClick,
        handleDeleteProductModalClose,
        handleSortByClick,
        handleSortByMenuClose,
    }
}