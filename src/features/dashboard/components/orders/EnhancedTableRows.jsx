import {useContext} from 'react';
import {TableBody, TableRow, TableCell} from '@mui/material';
import EnhancedTableRow from './EnhancedTableRow';
import { DashboardContext } from '../../context/DashboardContext';
import {OrderContext} from '../../context/OrderContext';


export default function EnhancedTableRows(){
    const {orders} = useContext(DashboardContext);
    const {filterOrders, page, rowsPerPage} = useContext(OrderContext);
    return (
        <TableBody>
            {orders
            .slice(page*rowsPerPage, (page + 1)*rowsPerPage)
            .filter(order => filterOrders(order.number, order.user.email, order.total, order.createdAt, order.status))
            .map(order => (<EnhancedTableRow key={order.id} order={order} />) )}
        </TableBody>
    )
}