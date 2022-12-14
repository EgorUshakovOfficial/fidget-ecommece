import {TableRow, TableCell} from '@mui/material';

export default function HeadCells(){
    return (
        <TableRow>
            <TableCell align="center">Refund</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Cost</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total</TableCell>
        </TableRow>
    );
}