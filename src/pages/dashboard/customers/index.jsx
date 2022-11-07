import DashboardLayout from '../../containers/layouts/DashboardLayout';
import CustomerHeader from './CustomerHeader';
import CustomerTable from './CustomerTable';

export default function Customers(){
    return (
        <DashboardLayout>
            <CustomerHeader />
            <CustomerTable />
        </DashboardLayout>
    )
}