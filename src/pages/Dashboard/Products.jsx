import {useContext} from 'react';
import {
    ProductProvider,
    AddProduct,
    ProductFilter,
    SortByFilterMenu,
    ProductGallery,
    AddProductModal,
    DeleteProductModal,
    EditProductModal
} from '../../features/dashboard/index';
import Loading from '../../components/Loading';
import { StateContext } from '../../context/StateContext';

export default function Products(){
    const {loading} = useContext(StateContext);
    return (
        <ProductProvider>
            <AddProduct />
            <ProductFilter />
            <SortByFilterMenu />
            {loading ? <Loading /> :<ProductGallery />}
            <AddProductModal />
            <DeleteProductModal />
            <EditProductModal />
        </ProductProvider>
    )
}