import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';
import {Link} from 'react-router-dom';
export default function InformationSummary(){
    return (
        <TableContainer sx={{boxShadow:"0", border:"1px solid lightgray"}} component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Contact</TableCell>
                        <TableCell>egorushakov13@gmail</TableCell>
                        <TableCell>
                            <Link to="/checkout/information" style={{color:"black"}}>
                                Change
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Ship to</TableCell>
                        <TableCell>584 Windridge Road, Airdrie AB T4B 2P9, Canada</TableCell>
                        <TableCell>
                            <Link to="/checkout/information" style={{color:"black"}}>
                                Change
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Method</TableCell>
                        <TableCell>Free Shipping</TableCell>
                        <TableCell>
                            <Link to="/checkout/shipping" style={{color:"black"}}>
                                Change
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}