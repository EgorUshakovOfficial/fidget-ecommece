import {
    ProductProvider,
    AddProduct,
    ProductFilter,
    SortByFilterMenu,
    ProductGallery,
    AddProductModal,
    DeleteProductModal
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
        </ProductProvider>
    )
}