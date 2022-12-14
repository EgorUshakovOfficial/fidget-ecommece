import {Fragment, useContext} from 'react';
import {TableRow, TableCell, Checkbox} from '@mui/material';


export default function OrderItems(){
    return (
        <Fragment>
            <TableRow>
                <TableCell align="center">
                    <Checkbox
                        color="primary"
                        indeterminate={false}
                        check={false}
                        disableRipple
                    />
                </TableCell>
                <TableCell align="center">
                    <a href="#">
                        Check mark
                    </a>
                </TableCell>
                <TableCell align="center">$12.99</TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">$12.99</TableCell>
            </TableRow>
        </Fragment>
    )
}