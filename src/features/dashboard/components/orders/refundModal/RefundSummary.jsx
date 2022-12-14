import {Fragment} from 'react';
import {TableRow, TableCell, Typography} from '@mui/material';

export default function RefundSummary(){
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
                        $12.99
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
                        Free
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
                        $12.99
                    </Typography>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}