import {useState, useEffect, useContext} from 'react';
import { StateContext } from '../../../context/StateContext';
import { ProductContext } from '../context/ProductContext';

export default function useEditProductModal(){
    // State
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    // Pre-fills edit modal form
    const {productsForSale} = useContext(StateContext);
    const {editProductId, setOpenConfirmEditProductModal} = useContext(ProductContext);
    useEffect(() => {
        if (editProductId === ""){
            setImage(null);
            setTitle('');
            setDescription('');
            setPrice('');
            setQuantity('');
            setOpenConfirmEditProductModal(false);
            return;
        }

        let productToBeEdited = productsForSale
        .filter(product => product._id === editProductId)[0];
        setImage(productToBeEdited.imageUrl);
        setTitle(productToBeEdited.title);
        setDescription(productToBeEdited.description);
        setPrice(productToBeEdited.price);
        setQuantity(productToBeEdited.stock);
    }, [editProductId])

    // Handles image on change
    const handleImageOnChange = e => {
        setImage(e.target.value);
    }

    // Handles title on change
    const handleTitleOnChange = e => {
        setTitle(e.target.value);
    }

    // Handles description on change
    const handleDescriptionOnChange = e => {
        setDescription(e.target.value);
    }

    // Handles price on change
    const handlePriceOnChange = e => {
        setPrice(e.target.value);
    }

    // Handles quanitity on change
    const handleQuantityOnChange = e => {
        setQuantity(e.target.value);
    }

    return {
        image,
        title,
        description,
        price,
        quantity,
        handleImageOnChange,
        handleTitleOnChange,
        handleDescriptionOnChange,
        handlePriceOnChange,
        handleQuantityOnChange
    };

}