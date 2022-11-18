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

export default function Products(){
    return (
        <ProductProvider>
            <AddProduct />
            <ProductFilter />
            <SortByFilterMenu />
            <ProductGallery />
            <AddProductModal />
            <DeleteProductModal />
            <EditProductModal />
        </ProductProvider>
    )
}