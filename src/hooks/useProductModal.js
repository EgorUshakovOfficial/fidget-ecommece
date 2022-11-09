import {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../context/ProductContext';

export default function useProductModal(){
    const [productImage, setProductImage] = useState(null);
    const [productImageUrl, setProductImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const {setOpenProductModal} = useContext(ProductContext);

    // Create product image url
    useEffect(() => {
        if (productImage === null) return;

        const imageUrl = URL.createObjectURL(productImage);
        setProductImageUrl(imageUrl);
    }, [productImage]);

    // Handles product image upload
    const handleProductImageUpload = e => {
        // User doesn't select any image
        if (e.target.files[0] === undefined) return;

        // Upload image is successfully set
        const image = e.target.files[0];
        setProductImage(image);
    }

    // Handles product image close
    const handleProductImageClick = () => {
        setProductImage(null);
        setProductImageUrl('');
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

    // Handles quantity on change
    const handleQuantityOnChange = e => {
        setQuantity(e.target.value);
    }

    // Handles product modal form when submitted
    const onProductModalSubmit = e => {
        // Prevent default behaviour of form
        e.preventDefault();

        // Fetch from specific api...

        setOpenProductModal(false);

    }

    return {
        productImage,
        productImageUrl,
        title,
        description,
        price,
        quantity,
        handleProductImageUpload,
        handleProductImageClick,
        handleTitleOnChange,
        handleDescriptionOnChange,
        handlePriceOnChange,
        handleQuantityOnChange,
        onProductModalSubmit
    }


}