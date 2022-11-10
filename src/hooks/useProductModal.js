import {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../context/ProductContext';
import { validateNumericalInput } from '../utils/validators';

export default function useProductModal(){
    const [productImage, setProductImage] = useState(null);
    const [productImageUrl, setProductImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('1');
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

        if (validateNumericalInput(price) === "Input is not valid"){
            return;
        }

        // Fetch from specific api...

        // Set form fields to initial values
        setOpenProductModal(false);
        setProductImage(null);
        setProductImageUrl('');
        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
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