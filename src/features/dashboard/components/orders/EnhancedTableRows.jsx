import {useContext} from 'react';
import {TableBody, TableRow, TableCell} from '@mui/material';
import EnhancedTableRow from './EnhancedTableRow';
import {OrderContext} from '../../context/OrderContext';

export default function EnhancedTableRows(){
    const {orders} = useContext(OrderContext);
    const emptyRows = true;
    return (
        <TableBody>
            {orders.map((order, index) => (<EnhancedTableRow order={order} />) )}
        </TableBody>
    )
}