import {CustomerProvider} from './context/CustomerContext';
import { ProductProvider } from "./context/ProductContext";
import { DashboardContext, DashboardProvider} from './context/DashboardContext';
import DashboardLayout from './layouts/DashboardLayout';
import CustomerHeader from './components/customers/CustomerHeader';
import CustomerTable from './components/customers/table/CustomerTable';
import AddProduct from "./components/products/AddProduct";
import ProductFilter from "./components/products/ProductFilter";
import SortByFilterMenu from "./components/products/SortByFilterMenu";
import ProductGallery from "./components/products/ProductGallery";
import AddUserModal from './components/customers/table/AddUserModal';
import AddProductModal from './components/products/AddProductModal';
import DeleteProductModal from './components/products/DeleteProductModal';
import EditProductModal from './components/products/EditProductModal';
import {OrderContext, OrderProvider} from './context/OrderContext';
import OrderHeader from './components/orders/OrderHeader';
import OrderTable from './components/orders/OrderTable';

export {
    CustomerProvider,
    ProductProvider,
    DashboardProvider,
    DashboardContext,
    DashboardLayout,
    CustomerHeader,
    CustomerTable,
    AddProduct,
    ProductFilter,
    SortByFilterMenu,
    ProductGallery,
    AddUserModal,
    AddProductModal,
    DeleteProductModal,
    EditProductModal,
    OrderHeader,
    OrderTable,
    OrderContext,
    OrderProvider
};
