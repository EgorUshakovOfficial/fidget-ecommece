import {Fragment} from 'react';
import {OrderHeader, OrderProvider, OrderTable} from '../../features/dashboard/index';

export default function Products(){

    return (
        <OrderProvider>
            <OrderHeader />
            <OrderTable />
        </OrderProvider>
    )
}