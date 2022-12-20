import {useState, useEffect, useContext} from 'react';
import { StateContext } from '../../../../context/StateContext';
import { ProductContext } from '../../context/ProductContext';
import {editProduct} from '../../services/products/editProduct';


export default function useEditProductModal(){
    // State
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');


    const {productsForSale, setProductsForSale, loading, setLoading} = useContext(StateContext);
    const {
        editProductId,
        setEditProductId,
        setOpenConfirmEditProductModal
    } = useContext(ProductContext);

    // Pre-fills edit modal form
    useEffect(() => {
        if (editProductId === ""){
            setImageUrl(null);
            setTitle('');
            setDescription('');
            setPrice('');
            setQuantity('');
            setOpenConfirmEditProductModal(false);
            return;
        }

        let productToBeEdited = productsForSale
        .filter(product => product._id === editProductId)[0];
        setImageUrl(productToBeEdited.imageUrl);
        setTitle(productToBeEdited.title);
        setDescription(productToBeEdited.description);
        setPrice(productToBeEdited.price);
        setQuantity(productToBeEdited.stock);
    }, [editProductId])

    // Handles image close icon click
    const handleImageCloseIconClick = () => {
        setImageUrl('');
    };

    // Handles image on change
    const handleImageOnChange = e => {
        let file = e.target.files[0];

        // No file was selected by the user
        if (file === undefined) return;

        const imageUrl = URL.createObjectURL(file)
        setImageUrl(imageUrl);
        setSelectedImage(file);
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

    // Handles edit product form on submit
    const onSubmitEditProduct = e => {
        // Prevents form from being submitted to the server
        e.preventDefault();

        // Product to be edited
        let productToBeEdited = productsForSale
        .filter(product => product._id === editProductId)[0];

        const editedFields = {};

        // Add edited fields to object
        if (selectedImage !== null){
            editedFields.image = selectedImage;
        }

        if (productToBeEdited.title !== title){
            editedFields.title = title;
        }

        if (productToBeEdited.description !== description){
            editedFields.description = description;
        }

        if (productToBeEdited.stock !== quantity){
            editedFields.stock = quantity
        }

        if (productToBeEdited.price !== price){
            editedFields.price = price;
        }

        // Sends PUT /api/product/:productId request: Updates database and S3 bucket
        let numEditedFields = Object.keys(editedFields).length;
        if (numEditedFields > 0){
            // Changes loading state of the application to true
            setLoading(true);

            // Form data
            let formData = new FormData();
            for (let editedField in editedFields){
                formData.append(editedField, editedFields[editedField]);
            }

            // Configuration options
            const configOptions = {
                headers:{"Content-Type":"multipart/form-data"}
            };

            editProduct(editProductId, formData, configOptions)
            .then(updatedFields => setProductsForSale(products => {
                let index = products.findIndex(product => product._id === editProductId);
                let prevProduct = products[index];
                let updatedProduct = Object.assign(prevProduct, updatedFields);
                products[index] = updatedProduct;
                return [...products];
            }))
            .catch(err => console.log('Error! Something went wrong!'))
            .finally(() => setLoading(false));
        }

        // Closes edit product modal
        setEditProductId('');
    }

    return {
        imageUrl,
        selectedImage,
        title,
        description,
        price,
        quantity,
        handleImageCloseIconClick,
        handleImageOnChange,
        handleTitleOnChange,
        handleDescriptionOnChange,
        handlePriceOnChange,
        handleQuantityOnChange,
        onSubmitEditProduct
    };

}