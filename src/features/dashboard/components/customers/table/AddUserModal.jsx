import {useContext} from 'react';
import {useTheme} from '@mui/material/styles';
import {
    Box,
    Modal,
    Button,
    TextField,
    useMediaQuery,
    InputAdornment,
    Typography,
    IconButton
} from '@mui/material';
import { Public, EmailRounded, Home, Apartment, Send, Close} from '@mui/icons-material';
import { CustomerContext } from '../../../context/CustomerContext';

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

    return (
        <Modal
            hideBackdrop
            open={openNewUserForm}
            onClose={() => setOpenNewUserForm(false)}
        >
            <Box
                sx={{
                    ...style,
                    width: matches ? 400 : "90%"
                }}
                component="form"
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
                    <IconButton onClick={() => setOpenNewUserForm(false)}>
                        <Close />
                    </IconButton>
                </Box>
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
                        InputLabelProps={{shrink: true}}
                        fullWidth

                    />
                    <TextField
                        id="last-name"
                        label="Last name"
                        size="small"
                        InputLabelProps={{shrink: true}}
                        placeholder="Doe"
                        fullWidth
                    />
                </Box>
                <TextField
                    id="email"
                    label="Email"
                    size="small"
                    placeholder="e.g. johndoe@example.com"
                    fullWidth
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <EmailRounded />
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    id="countryRegion"
                    label="Country/Region"
                    size="small"
                    placeholder="e.g, Canada"
                    fullWidth
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <Public />
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    id="address"
                    label="Address"
                    size="small"
                    placeholder="e.g, 123 Bakerstreet Cirle"
                    fullWidth
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <Home />
                            </InputAdornment>
                        )
                    }}
                />
                <TextField
                    id="apartment-suite"
                    label="Apartment or suite"
                    size="small"
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
                        placeholder="T4B 2P9"
                        fullWidth
                        InputLabelProps={{shrink:true}}
                    />
                    <TextField
                        id="state-province"
                        label="State/Province"
                        size="small"
                        placeholder="AB"
                        InputLabelProps={{shrink:true}}
                    />
                    <TextField
                        id="city"
                        label="City"
                        size="small"
                        placeholder="Calgary"
                        InputLabelProps={{shrink:true}}
                    />
                </Box>
                <Button
                    variant="contained"
                    color="success"
                    size="small"
                    type="submit"
                    endIcon={<Send />}
                >
                    Submit
                </Button>
            </Box>
        </Modal>
    )
}