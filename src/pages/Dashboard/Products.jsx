import {
    ProductProvider,
    AddProduct,
    ProductFilter,
    SortByFilterMenu,
    ProductGallery,
    ProductModal
} from '../../features/dashboard/index';

export default function Products(){
    return (
        <ProductProvider>
            <AddProduct />
            <ProductFilter />
            <SortByFilterMenu />
            <ProductGallery />
            <ProductModal />
        </ProductProvider>
    )
}