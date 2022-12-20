import {useContext} from 'react';
import {useTheme} from '@mui/material/styles';
import {
    Alert,
    Box,
    Modal,
    Button,
    TextField,
    useMediaQuery,
    InputAdornment,
    Typography,
    IconButton,
    Backdrop,
} from '@mui/material';
import { Public, EmailRounded, Home, Apartment, Send, Close} from '@mui/icons-material';
import { CustomerContext } from '../../../context/CustomerContext';
import useNewUserModal from '../../../hooks/customers/useNewUserModal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display:"flex",
    flexDirection:"column",
    gap:"1em",
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid lightgray',
    borderRadius: "8px",
    boxShadow: 24,
    p:4
};

export default function AddUserModal(){
    const {openNewUserForm, setOpenNewUserForm} = useContext(CustomerContext);

    const theme = useTheme();

    let matches = useMediaQuery(theme.breakpoints.up('sm'));

    const newUserProps = useNewUserModal();

    return (
        <Modal
            open={openNewUserForm}
            onClose={() => setOpenNewUserForm(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: 500}}
        >
            <Box
                sx={{
                    ...style,
                    width: matches ? 400 : "90%"
                }}
                component="form"
                onSubmit={newUserProps.newUserOnSubmit}
            >
                <Box
                    style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}
                >
                    <Typography
                        component="h2"
                        variant="h5"
                    >
                        New User
                    </Typography>
                    <IconButton onClick={newUserProps.handleCloseIconClick}>
                        <Close />
                    </IconButton>
                </Box>
                {(newUserProps.error !== "") && <Alert severity="error">{newUserProps.error}</Alert>}
                <Box
                    style={{
                        display:"grid",
                        gridTemplateColumns: matches ? "repeat(2, 1fr)" : "auto",
                        gap:"1em"
                    }}
                >
                    <TextField
                        id="first-name"
                        label="First name"
                        size="small"
                        placeholder="John"
                        onChange={newUserProps.handleFirstNameOnChange}
                        value={newUserProps.firstName}
                        InputLabelProps={{shrink: true}}
                        fullWidth
                        required
                    />
                    <TextField
                        id="last-name"
                        label="Last name"
                        size="small"
                        onChange={newUserProps.handleLastNameOnChange}
                        value={newUserProps.lastName}
                        InputLabelProps={{shrink: true}}
                        placeholder="Doe"
                        fullWidth
                        required
                    />
                </Box>
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    size="small"
                    placeholder="e.g. johndoe@example.com"
                    fullWidth
                    onChange={newUserProps.handleEmailOnChange}
                    value={newUserProps.email}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <EmailRounded />
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <TextField
                    id="countryRegion"
                    label="Country/Region"
                    size="small"
                    placeholder="e.g, Canada"
                    fullWidth
                    onChange={newUserProps.handleCountryRegionOnChange}
                    value={newUserProps.countryRegion}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <Public />
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <TextField
                    id="address"
                    label="Address"
                    size="small"
                    onChange={newUserProps.handleAddressOnChange}
                    value={newUserProps.address}
                    placeholder="e.g, 123 Bakerstreet Cirle"
                    fullWidth
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <Home />
                            </InputAdornment>
                        )
                    }}
                    required
                />
                <TextField
                    id="apartment-suite"
                    label="Apartment or suite"
                    size="small"
                    onChange={newUserProps.handleApartmentSuiteOnChange}
                    placeholder="e.g, 3000"
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <Apartment />
                            </InputAdornment>
                        )
                    }}
                />
                <Box
                    style={{
                        display:"grid",
                        gridTemplateColumns: matches ? "repeat(3, 1fr)" : "auto",
                        gap:"1em"
                    }}
                >
                    <TextField
                        id="postal-code"
                        label="Postal Code"
                        size="small"
                        onChange={newUserProps.handlePostalCodeOnChange}
                        value={newUserProps.postalCode}
                        placeholder="T4B 2P9"
                        fullWidth
                        InputLabelProps={{shrink:true}}
                        required
                    />
                    <TextField
                        id="state-province"
                        label="State/Province"
                        size="small"
                        onChange={newUserProps.handleStateProvinceOnChange}
                        value={newUserProps.stateProvince}
                        placeholder="AB"
                        InputLabelProps={{shrink:true}}
                        required
                    />
                    <TextField
                        id="city"
                        label="City"
                        size="small"
                        onChange={newUserProps.handleCityOnChange}
                        value={newUserProps.city}
                        placeholder="Calgary"
                        InputLabelProps={{shrink:true}}
                        required
                    />
                </Box>
                <Button
                    variant="contained"
                    color="success"
                    size="medium"
                    type="submit"
                    endIcon={<Send />}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    )
}