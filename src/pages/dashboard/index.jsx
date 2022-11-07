import DashboardLayout from '../../containers/layouts/DashboardLayout';
import CustomerHeader from './customers/CustomerHeader';
import CustomerTable from './customers/table/index';
import { CustomerProvider } from '../../context/CustomerContext';
export default function Dashboard(){
    return (
        <DashboardLayout>
            <CustomerProvider>
                <CustomerHeader />
                <CustomerTable />
            </CustomerProvider>
        </DashboardLayout>
    )
}