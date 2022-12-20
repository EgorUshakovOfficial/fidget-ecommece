import moment from 'moment';
import {useContext} from 'react';
import {TableCell, TableRow, Checkbox, Tooltip, IconButton} from '@mui/material';
import {MoreHoriz} from '@mui/icons-material';
import { OrderContext } from '../../context/OrderContext';
import OptionsMenu from './OptionsMenu';

export default function EnhancedTableRow({order}){
    const {isSelected, handleSelectClick, handleOrderOptionsClick} = useContext(OrderContext);

    return (
        <TableRow
            key={order._id}
            hover
            role='checkbox'
            selected={isSelected(order._id)}
        >
            <TableCell padding='checkbox'>
                <Checkbox
                    color='primary'
                    checked={isSelected(order._id)}
                    onClick={e => handleSelectClick(e, order._id)}
                />
            </TableCell>
            <TableCell
                component='th'
                scope='row'
                padding='none'
                align="center"
            >
                {order.number}
            </TableCell>
            <TableCell align="center">{order.user.email}</TableCell>
            <TableCell align="center">{order.subtotal}</TableCell>
            <TableCell align="center">{order.shippingCost}</TableCell>
            <TableCell align="center">{order.total}</TableCell>
            <TableCell align="center">{moment(order.createdAt).format('MM/DD/YYYY')}</TableCell>
            <TableCell align="center">{order.status === 'partial-refund' ? 'Partially Refunded' :
             order.status === 'complete-refund' ? 'Completely refunded' : order.status}</TableCell>
            <TableCell align="center" onClick={e => handleOrderOptionsClick(e, order._id)}>
                <Tooltip title="Edit status">
                    <IconButton disableRipple>
                        <MoreHoriz />
                    </IconButton>
                </Tooltip>
                <OptionsMenu orderId={order._id} />
            </TableCell>
        </TableRow>
    )
}