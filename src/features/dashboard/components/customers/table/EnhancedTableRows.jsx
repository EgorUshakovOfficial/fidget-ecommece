import {useContext} from 'react';
import { CustomerContext } from '../../../context/CustomerContext';
import {TableBody, TableRow, TableCell} from '@mui/material';
import EnhancedTableRow from './EnhancedTableRow';

export default function EnhancedTableRows(){
    const {
        page,
        rowsPerPage,
        filterRows,
        isSelected,
        handleSelectClick,
        rows,
        emptyRows
    } = useContext(CustomerContext)
    return (
        <TableBody>
            {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .filter(row => filterRows(row.name, row.email, row.subscribed))
            .map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;
                return <EnhancedTableRow
                    key={labelId}
                    labelId={labelId}
                    handleSelectClick={handleSelectClick}
                    row={row}
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