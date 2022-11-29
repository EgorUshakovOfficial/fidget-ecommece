import {TableCell, TableRow, Checkbox, IconButton} from '@mui/material';
import {MoreHoriz} from '@mui/icons-material';
export default function EnhancedTableRow({order}){
    return (
        <TableRow
            key={order.id}
            onClick={() => {}}
            hover
            role='checkbox'
            selected={true}
        >
            <TableCell padding='checkbox'>
                <Checkbox
                    color='primary'
                    checked={false}
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