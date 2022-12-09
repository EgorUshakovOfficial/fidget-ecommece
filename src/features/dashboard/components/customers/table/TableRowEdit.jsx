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
export default function TableRowEdit(){
    return (
        <Fragment>
            <TableCell>
                <Box style={{display:"flex", gap:"0.25em"}}>
                    <TextField
                        label="Name"
                        size="small"
                        placeholder="John"
                        style={{minWidth:"150px"}}
                        InputLabelProps={{shrink: true}}
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
                    style={{minWidth:"150px"}}
                    InputLabelProps={{shrink: true}}
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
                    InputLabelProps={{shrink: true}}
                    fullWidth
                    onClick={e => e.stopPropagation()}
                    required
                />
            </TableCell>
            <TableCell>
                <FormControl fullWidth>
                    <InputLabel>Subscribed</InputLabel>
                    <Select
                        id="is-subscribed"
                        value={"Yes"}
                        label="Subscribed"
                        style={{minWidth:"100px"}}
                        fullWidth
                        onChange={() => {}}
                    >
                        <MenuItem value="yes">
                            Yes
                        </MenuItem>
                        <MenuItem value="no">
                            No
                        </MenuItem>
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
                        <IconButton>
                            <Close />
                        </IconButton>
                    </Tooltip>
                </Box>
            </TableCell>
        </Fragment>
    )
}