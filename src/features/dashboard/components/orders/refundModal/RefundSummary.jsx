import {useContext, Fragment} from 'react';
import {TableRow, TableCell, Typography} from '@mui/material';
import { DashboardContext } from '../../../context/DashboardContext';
import {OrderContext} from '../../../context/OrderContext';

export default function RefundSummary({subtotal}){
    const {orders} = useContext(DashboardContext);
    const {orderSelected} = useContext(OrderContext);

    // Selected order details
    let orderDetails = orders.filter(order => order._id === orderSelected.id)[0];

    return (
        <Fragment>
            <TableRow>
                <TableCell align="center" sx={{border:"none"}}>
                    <Typography fontWeight="bold">
                        Subtotal
                    </Typography>
                </TableCell>
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell align="center" sx={{borderBottom:"none"}}>
                    <Typography fontWeight="bold">
                        ${subtotal}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow >
                <TableCell align="center" sx={{borderBottom:"none"}}>
                    <Typography fontWeight="bold">
                        Shipping
                    </Typography>
                </TableCell>
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell align="center" sx={{borderBottom:"none"}}>
                    <Typography fontWeight="bold">
                        ${orderDetails.shippingCost}
                    </Typography>
                </TableCell>
            </TableRow>
            <TableRow >
                <TableCell align="center" sx={{borderBottom:"none"}}>
                    <Typography fontWeight="bold">
                        Amount
                    </Typography>
                </TableCell>
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell sx={{borderBottom:"none"}} />
                <TableCell align="center" sx={{borderBottom:"none"}}>
                    <Typography fontWeight="bold">
                        ${subtotal + orderDetails.shippingCost}
                    </Typography>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}