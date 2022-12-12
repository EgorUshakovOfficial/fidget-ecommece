import {Fragment, useContext} from 'react';
import {TableCell, Checkbox, IconButton, Tooltip} from '@mui/material';
import {MoreHoriz} from '@mui/icons-material';
import OptionsMenu from './OptionsMenu';
import {CustomerContext} from '../../../context/CustomerContext';
import {createShippingAddress} from '../../../../../utils/createShippingAddress';

export default function TableRowContent({
    _id:userId,
    firstName,
    lastName,
    email,
    address,
    city,
    stateProvince,
    postalCode,
    countryRegion,
    isSubscribed
}){
    const {handleOptionsClick, userSelected} = useContext(CustomerContext);

    // Customer's fullname
    let fullName = `${firstName} ${lastName}`;

    return (
        <Fragment>
            <TableCell
                component="th"
                scope="row"
                padding="none"
                align="center"
            >
                {fullName}
            </TableCell>
            <TableCell align="center">{email}</TableCell>
            <TableCell align="center">{address}</TableCell>
            <TableCell align="center">{city}</TableCell>
            <TableCell align="center">{stateProvince}</TableCell>
            <TableCell align="center">{countryRegion}</TableCell>
            <TableCell align="center">{postalCode}</TableCell>
            <TableCell align="center">{isSubscribed ? "Yes" : "No"}</TableCell>
            <TableCell align="center">
                <Tooltip title="Edit or delete">
                    <IconButton onClick={e => handleOptionsClick(e, userId)}>
                    <MoreHoriz />
                    </IconButton>
                </Tooltip>
                {(userSelected.id === userId && userSelected.action==="selected") && <OptionsMenu userId={userId} />}
            </TableCell>
        </Fragment>
    )
}