import {useContext} from 'react';
import {TableBody} from '@mui/material';
import {DashboardContext} from '../../../context/DashboardContext';
import { CustomerContext } from '../../../context/CustomerContext';
import EnhancedTableRow from './EnhancedTableRow';

export default function EnhancedTableRows(){
    const {customers} = useContext(DashboardContext);
    const {page, rowsPerPage, filterRows,} = useContext(CustomerContext);

    return (
        <TableBody>
            {customers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .filter(customer => {
                let fullName = `${customer.firstName} ${customer.lastName}`;
                return filterRows(fullName, customer.email, "No")
            })
            .map(customer => (<EnhancedTableRow
                    key={customer._id}
                    customer={customer}
                />)
            )}
        </TableBody>
    )
}