import DashboardLayout from '../../containers/layouts/DashboardLayout';
import { CustomerProvider } from '../../../context/CustomerContext';
import CustomerHeader from './CustomerHeader';
import CustomerTable from './CustomerTable';

export default function Customers(){
    return (
        <DashboardLayout>
            <CustomerProvider>
                <CustomerHeader />
                <CustomerTable />
            </CustomerProvider>
        </DashboardLayout>
    )
}