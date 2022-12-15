import {Fragment, useContext} from 'react';
import {TableRow, TableCell, Checkbox} from '@mui/material';
import { OrderContext } from '../../../context/OrderContext';


export default function OrderItems({selectOrderItem, orderItemsSelected}){
    const {orderItems} = useContext(OrderContext);

    return (
        <Fragment>
            {orderItems.map(item => (
                <TableRow key={item._id}>
                    <TableCell align="center">
                        <Checkbox
                            color="primary"
                            // indeterminate={}
                            checked={orderItemsSelected.indexOf(item) >= 0}
                            onClick={e => selectOrderItem(e, item._id)}
                            disableRipple
                        />
                    </TableCell>
                    <TableCell align="center">
                        <a href={item.product.imageUrl} style={{color:"black", textDecoration:"underline"}}>
                           {item.product.title}
                        </a>
                    </TableCell>
                    <TableCell align="center">${item.product.price}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">${(item.quantity * item.product.price)}</TableCell>
                </TableRow>
            ))}
        </Fragment>
    )
}