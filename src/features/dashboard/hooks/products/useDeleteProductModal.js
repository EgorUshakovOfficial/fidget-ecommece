import {useContext} from 'react';
import {ProductContext } from '../../context/ProductContext';
import {StateContext} from '../../../../context/StateContext';
import {deleteProduct} from '../../services/products/deleteProduct';

export default function useDeleteProductModal(){
    const {setProductsForSale, loading, setLoading} = useContext(StateContext);
    const {deleteProductId, setDeleteProductId} = useContext(ProductContext);

    // Handle delete product click
    const handleDeleteProductClick = async () => {
        // Change loading state of the application to true
        setLoading(true);

        // Sends POST request to /api/delete-product/:id
        deleteProduct(deleteProductId)
        .then(productId => setProductsForSale(
            products => products.filter(product => product._id !== productId)
        ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));

        // Closes delete product modal
        setDeleteProductId('');
    }

    return {handleDeleteProductClick}
}