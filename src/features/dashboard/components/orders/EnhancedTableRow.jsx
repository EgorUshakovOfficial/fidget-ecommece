import {useContext} from 'react';
import {TableCell, TableRow, Checkbox, IconButton} from '@mui/material';
import {MoreHoriz} from '@mui/icons-material';
import { OrderContext } from '../../context/OrderContext';

export default function EnhancedTableRow({order}){
    const {isSelected, handleSelectClick} = useContext(OrderContext);

    return (
        <TableRow
            key={order.id}
            hover
            role='checkbox'
            selected={isSelected(order.number)}
        >
            <TableCell padding='checkbox'>
                <Checkbox
                    color='primary'
                    checked={isSelected(order.number)}
                    onClick={e => handleSelectClick(e, order.number)}
                    inputProps={{}}
                />
            </TableCell>
            <TableCell
                component='th'
                scope='row'
                padding='none'
            >
                {order.number}
            </TableCell>
            <TableCell align="left">{order.email}</TableCell>
            <TableCell align="left">{order.total}</TableCell>
            <TableCell align="left">July 22, 2022</TableCell>
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