import {useState} from 'react';

export default function useProductServices(){
    const [openAddProductModal, setOpenAddProductModal] = useState(false);
    const [openConfirmEditProductModal, setOpenConfirmEditProductModal] = useState(false);
    const [deleteProductId, setDeleteProductId] = useState('');
    const [editProductId, setEditProductId] = useState('');
    const [anchorSortByMenu, setAnchorSortByMenu] = useState(null);
    const [error, setError] = useState('');
    const open = Boolean(anchorSortByMenu);

    // Opens modal for confirming any edits for product
    const handleModalCloseIconClick = () => {
        setOpenConfirmEditProductModal(true);
    }

    // Closes confirm edit product modal
    const handleConfirmEditProductModalClose = () => {
        setOpenConfirmEditProductModal(false);
    }

    // Handles new product click
    const handleNewProductClick = () => {
        setOpenAddProductModal(true);
    }

    // Closes add product modal
    const handleAddProductModalClose = () => {
        setOpenAddProductModal(false);
    }

    // Closes edit product modal
    const handleEditProductModalClose = () => {
        setEditProductId('');
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
        setOpenAddProductModal,
        deleteProductId,
        setDeleteProductId,
        editProductId,
        setEditProductId,
        openConfirmEditProductModal,
        setOpenConfirmEditProductModal,
        anchorSortByMenu,
        open,
        handleAddProductModalClose,
        handleNewProductClick,
        handleModalCloseIconClick,
        handleDeleteProductModalClose,
        handleEditProductModalClose,
        handleConfirmEditProductModalClose,
        handleSortByClick,
        handleSortByMenuClose,
    }
}