import {useContext} from 'react';
import { PageContext } from '../../context/PageContext';
import DashboardLayout from '../../containers/layouts/DashboardLayout';
import Customers from './customers/index';

export default function Dashboard(){
    const {page} = useContext(PageContext);
    return (
        <DashboardLayout>
            {page === "customers" && <Customers />}
        </DashboardLayout>
    )
}