import {useState} from 'react';
import {validateCardNumber, validateExpirationDate} from '../utils/validators';
export default function usePayment(){
    const [cardNumber, setCardNumber] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    // Handles card number
    const handleCardNumber = e => {
        setCardNumber(e.target.value);
    }

    // Handles card holder name
    const handleCardHolderName = e => {
         setCardholderName(e.target.value);
    }

    // Handles expiration date
    const handleExpirationDate = e => {
        setExpirationDate(e.target.value);
    }

    // Handles security code
    const handleSecurityCode = e => {
        setSecurityCode(e.target.value);
    }

    const payOnSubmit = e => {
        // Prevent default form from being submitted to the server
        e.preventDefault();

        let isCardNumberValid = validateCardNumber(cardNumber) === "Card number is not valid";
        let isExpirationDateValid = validateExpirationDate(expirationDate) === "Expiration date is not valid";

        // Exits out of function if card number or expiration date is not valid
        if (isCardNumberValid === false || isExpirationDateValid){
            return;
        }

        // Retrieve the buyer's information and the kind of shipping method from session storage
        const info = JSON.parse(sessionStorage.getItem('info'));
        const shipping = JSON.parse(sessionStorage.getItem('shipping'));

        // Payment information
        // const payment = {
        //     cardNumber: cardNumber.current,
        //     cardholderName: cardHolderName.current,
        //     expirationDate: expirationDate.current,
        //     securityCode: securityCode.current
        // }

        // Fetch stripe api here...
    }

    return {
        cardNumber,
        cardholderName,
        expirationDate,
        securityCode,
        handleCardNumber,
        handleCardHolderName,
        handleExpirationDate,
        handleSecurityCode,
        payOnSubmit
    };
}