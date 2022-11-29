import {useContext} from 'react';
import { PageContext, DashboardLayout } from '../../features/dashboard/index';
import Customers from './Customers';
import Products from './Products';
import Orders from './Orders';

export default function Dashboard(){
    const {page} = useContext(PageContext);
    return (
        <DashboardLayout>
            {page === "home" && <div>Analytics</div>}
            {page === "customers" && <Customers />}
            {page === "products" && <Products />}
            {page === "orders" && <Orders />}
        </DashboardLayout>
    )
}