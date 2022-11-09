import { ProductProvider } from "../../../context/ProductContext";

import AddProduct from "./AddProduct";
import ProductFilter from "./ProductFilter";
import SortByFilterMenu from "./SortByFilterMenu";
import ProductGallery from "./ProductGallery";
import ProductModal from './ProductModal';

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