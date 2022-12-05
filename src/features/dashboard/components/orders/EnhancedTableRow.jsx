import moment from 'moment';
import {useContext} from 'react';
import {TableCell, TableRow, Checkbox, IconButton} from '@mui/material';
import {MoreHoriz} from '@mui/icons-material';
import { OrderContext } from '../../context/OrderContext';

export default function EnhancedTableRow({order}){
    const {isSelected, handleSelectClick} = useContext(OrderContext);
    console.log(order);
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
            >
                {order.number}
            </TableCell>
            <TableCell align="left">{order.user.email}</TableCell>
            <TableCell align="left">{order.total}</TableCell>
            <TableCell align="left">{moment(order.createdAt).format('MM/DD/YYYY')}</TableCell>
            <TableCell align="left">{order.status}</TableCell>
            <TableCell align="right">
                <IconButton
                    aria-haspopup="true"
                >
                    <MoreHoriz />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}