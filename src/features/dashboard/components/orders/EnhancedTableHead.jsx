import {useContext} from 'react';
import {TableCell, TableHead, TableRow, Checkbox} from '@mui/material';
import {OrderContext} from '../../context/OrderContext';

const headCells = [
    {
        id:"order-number",
        numeric:true,
        disablePadding:false,
        label:"Order number"
    },
    {
        id:"email",
        numeric:false,
        disablePadding:false,
        label:"Email"
    },
    {
        id:'shippingCost',
        numeric:true,
        disablePadding:false,
        label:"Shipping Cost"
    },
    {
        id:"subtotal",
        numeric:false,
        disablePadding:false,
        label:"Subtotal"
    },
    {
        id:"amount",
        numeric:true,
        disablePadding:false,
        label:"Amount"
    },
    {
        id:"date",
        numeric:false,
        disablePadding: false,
        label:"Date"
    },
    {
        id:"status",
        numeric:false,
        disablePadding:false,
        label:"Status"
    },
    {
        id:"options",
        numeric:false,
        disablePadding:false,
        label:""
    }
];

export default function EnhancedTableHead(){
    const {
        numOrders,
        numOrdersSelected,
        handleSelectAllClick
    } = useContext(OrderContext);


    return (
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox
                        color="primary"
                        indeterminate={numOrdersSelected > 0 && numOrdersSelected < numOrders}
                        checked={numOrders > 0 && numOrders === numOrdersSelected}
                        onClick={handleSelectAllClick}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align="center"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
