import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Typography} from '@mui/material';
import {useContext} from 'react';
import { CheckoutContext } from "../../context/CheckoutContext";

export default function ConfirmationMessage(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const {firstName, lastName} = useContext(CheckoutContext);

    return (
        <Typography style={{
            textAlign: matches ? "center" : "left",
            lineHeight:1.6,
            wordSpacing:"2px"
        }}>
            Thank you for your order, {firstName} {lastName}. An email filled with the details of your purchase has been sent!
        </Typography>
    );
}