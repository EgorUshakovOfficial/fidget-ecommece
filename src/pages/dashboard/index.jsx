import {useContext} from 'react';
import { PageContext } from '../../context/PageContext';
import DashboardLayout from '../../containers/layouts/DashboardLayout';
import Customers from './customers/index';
import Products from './products/index';

export default function Dashboard(){
    const {page} = useContext(PageContext);
    return (
        <DashboardLayout>
            {page === "home" && <div>Analytics</div>}
            {page === "customers" && <Customers />}
            {page === "products" && <Products />}
            {page === "orders" && <div>Orders</div>}

        </DashboardLayout>
    )
}