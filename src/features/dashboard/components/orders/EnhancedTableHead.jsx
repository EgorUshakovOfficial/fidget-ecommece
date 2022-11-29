import {TableCell, TableHead, TableRow, Checkbox} from '@mui/material';

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
    }
];


export default function EnhancedTableHead(){
    return (
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox
                        color="primary"
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align="left"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
