import {
    CustomerProvider,
    CustomerHeader,
    CustomerTable
} from '../../features/dashboard/index';

export default function Customers(){
    return (
        <CustomerProvider>
            <CustomerHeader />
            <CustomerTable />
        </CustomerProvider>
    )
}