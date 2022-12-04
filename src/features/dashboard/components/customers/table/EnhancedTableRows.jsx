import {useContext} from 'react';
import {DashboardContext} from '../../../context/DashboardContext';
import { CustomerContext } from '../../../context/CustomerContext';

import {TableBody, TableRow, TableCell} from '@mui/material';
import EnhancedTableRow from './EnhancedTableRow';

export default function EnhancedTableRows(){
    const {customers} = useContext(DashboardContext);
    const {
        page,
        rowsPerPage,
        filterRows,
        isSelected,
        handleSelectClick,
        rows,
        emptyRows
    } = useContext(CustomerContext);

    return (
        <TableBody>
            {customers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .filter(customer => {
                let fullName = `${customer.firstName} ${customer.lastName}`;
                return filterRows(fullName, customer.email, "No")
            })
            .map(customer => {
                const isItemSelected = isSelected(customer.email);
                return <EnhancedTableRow
                    key={customer._id}
                    handleSelectClick={handleSelectClick}
                    customer={customer}
                    isItemSelected={isItemSelected}
                />
            })}
            {emptyRows > 0 && (
            <TableRow
                style={{
                height: 53 * emptyRows,
                }}
            >
                <TableCell colSpan={6} />
            </TableRow>
            )}
        </TableBody>
    )
}