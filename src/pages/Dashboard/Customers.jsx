import {Fragment} from 'react';
import {
    CustomerProvider,
    CustomerHeader,
    AddUserModal,
    CustomerTable
} from '../../features/dashboard/index';

export default function Customers(){
    return (
        <CustomerProvider>
            <CustomerHeader />
            <CustomerTable />
            <AddUserModal />
        </CustomerProvider>
    )
}