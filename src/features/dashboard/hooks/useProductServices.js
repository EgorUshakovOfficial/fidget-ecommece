import {useState, useMemo, useEffect} from 'react';
import {api} from '../../../lib/api';

export default function useProductServices(){
    const [openProductModal, setOpenProductModal] = useState(false);
    const [anchorSortByMenu, setAnchorSortByMenu] = useState(null);
    //const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const open = Boolean(anchorSortByMenu);

    // // Fetch products from server
    // useEffect(() => {
    //     api
    //     .get('/api/products')
    //     .then(res => {
    //         setProducts([...res.data]);
    //     })
    //     .catch(err => {
    //         setError('Error! Something went wrong!');
    //     })
    // }, [])


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
        // products,
        // setProducts,
        handleProductModalClose,
        handleNewProductClick,
        handleSortByClick,
        handleSortByMenuClose,
    }
}