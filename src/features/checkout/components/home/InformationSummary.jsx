import {useContext} from 'react';
import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';
import {Link} from 'react-router-dom';
import {CheckoutContext} from '../../context/CheckoutContext';
import {createShippingAddress} from '../../../../utils/createShippingAddress';

export default function InformationSummary(){
    const {
        email,
        address,
        city,
        stateProvince,
        shippingMethod,
        postalCode,
        countryRegion
    } = useContext(CheckoutContext);

    // Type of shipping method
    const typeShipping = (shippingMethod==="free-shipping")
        ? "Free Shipping" : "Tracked Shipping";

    return (
        <TableContainer sx={{boxShadow:"0", border:"1px solid lightgray"}} component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Contact</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell>
                            <Link to="/checkout/information" style={{color:"black"}}>
                                Change
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Ship to</TableCell>
                        <TableCell>{createShippingAddress(address, city, stateProvince, postalCode, countryRegion)}</TableCell>
                        <TableCell>
                            <Link to="/checkout/information" style={{color:"black"}}>
                                Change
                            </Link>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Method</TableCell>
                        <TableCell>{typeShipping}</TableCell>
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