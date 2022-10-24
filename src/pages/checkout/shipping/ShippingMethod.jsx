import {
    Box,
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    FormControlLabel,
    RadioGroup,
    Radio,
    Paper
} from '@mui/material';
export default function ShippingMethod(){
    return (
        <Box>
            <Typography variant="h6" component="h2" textAlign="left" marginBottom="0.2em">Shipping method</Typography>
            <RadioGroup
                aria-labelledby="type-shipping-label"
                defaultValue="free-shipping"
                name="type-shipping"
            >
                <TableContainer sx={{boxShadow:"0", border:"1px solid lightgray"}}component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <FormControlLabel value="free-shipping" control={<Radio name="type-shipping" />} label="Free Shipping" />
                                </TableCell>
                                <TableCell align="right">Free</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <FormControlLabel value="tracked-shipping" control={<Radio name="type-shipping" />} label="Tracked shipping" />
                                </TableCell>
                                <TableCell align="right">9.32</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </RadioGroup>
        </Box>
    )
}