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
import useCustomerRowEdit from '../../../hooks/useCustomerRowEdit';
export default function TableRowEdit({
    firstName,
    lastName,
    email,
    address,
    city,
    stateProvince,
    countryRegion,
    postalCode,
    isSubscribed,
}){
    // Fullname
    let name = `${firstName} ${lastName}`;

    // Edit user fields and functions
    const editUserProps = useCustomerRowEdit({
        firstName,
        lastName,
        email,
        address,
        city,
        stateProvince,
        countryRegion,
        postalCode,
        isSubscribed
    });

    return (
        <Fragment>
            <TableCell>
                <Box style={{display:"flex", gap:"0.25em"}}>
                    <TextField
                        label="First name"
                        size="small"
                        placeholder="John"
                        value={editUserProps.firstName}
                        onChange={editUserProps.handleFirstNameChange}
                        style={{minWidth:"100px"}}
                        InputLabelProps={{shrink: true}}
                        onClick={e => e.stopPropagation()}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Last name"
                        size="small"
                        placeholder="Doe"
                        value={editUserProps.lastName}
                        onChange={editUserProps.handleLastNameChange}
                        style={{minWidth:"100px"}}
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
                    style={{minWidth:"200px"}}
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
                    style={{minWidth:"200px"}}
                    value={editUserProps.address}
                    onChange={editUserProps.handleAddressChange}
                    InputLabelProps={{shrink: true}}
                    fullWidth
                    onClick={e => e.stopPropagation()}
                    required
                />
            </TableCell>
            <TableCell>
                <TextField
                    label="City"
                    size="small"
                    placeholder="e.g, Airdrie"
                    style={{minWidth:"100px"}}
                    value={editUserProps.city}
                    onChange={editUserProps.handleCityChange}
                    InputLabelProps={{shrink:true}}
                    onClick={e => e.stopPropagation()}
                    fullWidth
                    required
                />
            </TableCell>
            <TableCell>
                <TextField
                    label="State/Province"
                    size="small"
                    placeholder="e.g, T4B 2P9"
                    value={editUserProps.stateProvince}
                    onChange={editUserProps.handleStateProvinceChange}
                    style={{minWidth:"120px"}}
                    InputLabelProps={{shrink:true}}
                    onClick={e => e.stopPropagation()}
                    fullWidth
                />
            </TableCell>
            <TableCell>
                <TextField
                    label="Country"
                    size="small"
                    placeholder="e.g, Canada"
                    value={editUserProps.countryRegion}
                    onChange={editUserProps.handleCountryRegionChange}
                    style={{minWidth:"100px"}}
                    InputLabelProps={{shrink:true}}
                    onClick={e => e.stopPropagation()}
                    fullWidth
                />
            </TableCell>
            <TableCell>
                <TextField
                    label="Postal Code"
                    size="small"
                    placeholder="e.g, T4B 2P9"
                    value={editUserProps.postalCode}
                    onChange={editUserProps.handlePostalCodeChange}
                    style={{minWidth:"100px"}}
                    InputLabelProps={{shrink:true}}
                    onClick={e => e.stopPropagation()}
                    fullWidth
                />
            </TableCell>
            <TableCell>
                <FormControl fullWidth>
                    <InputLabel id="subscribed-label">Subscribed</InputLabel>
                    <Select
                        labelId='subscribed-label'
                        id="is-subscribed"
                        value={editUserProps.subscribed}
                        label="Subscribed"
                        style={{minWidth:"100px"}}
                        fullWidth
                        onClick={e => e.stopPropagation()}
                        onChange={editUserProps.handleSubscribedChange}
                    >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                    </Select>
                </FormControl>
            </TableCell>
            <TableCell>
                <Box display="flex" gap="0.25em">
                    <Tooltip title="Save">
                        <IconButton onClick={editUserProps.editUserOnClick}>
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