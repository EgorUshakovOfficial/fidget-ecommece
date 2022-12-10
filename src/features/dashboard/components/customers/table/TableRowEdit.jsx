import {Fragment} from 'react';
import {TableCell,
    Box,
    TextField,
    Select,
    MenuItem,
    Tooltip,
    FormControl,
    InputLabel,
    IconButton
} from '@mui/material';
import {Check, Close} from '@mui/icons-material';
import useTableRowEdit from '../../../hooks/useTableRowEdit';
import {createShippingAddress} from '../../../../../utils/createShippingAddress';
export default function TableRowEdit({
    firstName,
    lastName,
    email,
    address,
    city,
    isSubscribed,
    stateProvince,
    postalCode,
    countryRegion
}){
    // Fullname
    let name = `${firstName} ${lastName}`;

    // Shipping Address
    let shippingAddress = createShippingAddress(address, city, stateProvince, postalCode, countryRegion);
    console.log(isSubscribed);
    // Edit user fields and functions
    const editUserProps = useTableRowEdit({name, email, shippingAddress, isSubscribed});

    return (
        <Fragment>
            <TableCell>
                <Box style={{display:"flex", gap:"0.25em"}}>
                    <TextField
                        label="Name"
                        size="small"
                        placeholder="John"
                        value={editUserProps.name}
                        onChange={editUserProps.handleNameChange}
                        style={{minWidth:"150px"}}
                        InputLabelProps={{shrink: true}}
                        onClick={e => e.stopPropagation()}
                        fullWidth
                        required
                    />
                </Box>
            </TableCell>
            <TableCell>
                <TextField
                    label="Email"
                    size="small"
                    placeholder="e.g, johndoe@example.com"
                    value={editUserProps.email}
                    onChange={editUserProps.handleEmailChange}
                    style={{minWidth:"150px"}}
                    InputLabelProps={{shrink: true}}
                    onClick={e => e.stopPropagation()}
                    fullWidth
                    required
                />
            </TableCell>
            <TableCell>
                <TextField
                    label="Address"
                    size="small"
                    placeholder="e.g, 123 Bakerstreet Circle"
                    style={{minWidth:"150px"}}
                    multiline
                    rows={2}
                    value={editUserProps.shippingAddress}
                    InputLabelProps={{shrink: true}}
                    fullWidth
                    onClick={e => e.stopPropagation()}
                    required
                />
            </TableCell>
            <TableCell>
                <FormControl fullWidth>
                    <InputLabel id="subscribed-label">Subscribed</InputLabel>
                    <Select
                        labelId='subscribed-label'
                        id="is-subscribed"
                        value={editUserProps.isSubscribed}
                        label="Subscribed"
                        style={{minWidth:"100px"}}
                        fullWidth
                        onClick={e => e.stopPropagation()}
                        onChange={editUserProps.handleIsSubscribedChange}
                    >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <Box display="flex" gap="0.25em">
                    <Tooltip title="Save">
                        <IconButton>
                            <Check />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Close">
                        <IconButton onClick={editUserProps.closeAndDiscardEdits}>
                            <Close />
                        </IconButton>
                    </Tooltip>
                </Box>
            </TableCell>
        </Fragment>
    )
}