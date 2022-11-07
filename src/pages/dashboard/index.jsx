import DashboardLayout from '../../containers/layouts/DashboardLayout';
import CustomerHeader from './customers/CustomerHeader';
import CustomerTable from './customers/table/index';
export default function Dashboard(){
    return (
        <DashboardLayout>
            <CustomerHeader />
            <CustomerTable />
        </DashboardLayout>
    )
}