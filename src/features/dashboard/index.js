import {CustomerProvider} from './context/CustomerContext';
import { ProductProvider } from "./context/ProductContext";
import { PageProvider } from './context/PageContext';
import {PageContext} from './context/PageContext';
import DashboardLayout from './layouts/DashboardLayout';
import CustomerHeader from './components/customers/CustomerHeader';
import CustomerTable from './components/customers/table/CustomerTable';
import AddProduct from "./components/products/AddProduct";
import ProductFilter from "./components/products/ProductFilter";
import SortByFilterMenu from "./components/products/SortByFilterMenu";
import ProductGallery from "./components/products/ProductGallery";
import AddProductModal from './components/products/AddProductModal';
import DeleteProductModal from './components/products/DeleteProductModal';
import EditProductModal from './components/products/EditProductModal';

export {
    CustomerProvider,
    ProductProvider,
    PageProvider,
    PageContext,
    DashboardLayout,
    CustomerHeader,
    CustomerTable,
    AddProduct,
    ProductFilter,
    SortByFilterMenu,
    ProductGallery,
    AddProductModal,
    DeleteProductModal,
    EditProductModal
};
