import { CustomerProvider } from '../../../context/CustomerContext';
import CustomerHeader from './CustomerHeader';
import CustomerTable from './table/index';

export default function Customers(){
    return (
        <CustomerProvider>
            <CustomerHeader />
            <CustomerTable />
        </CustomerProvider>
    )
}