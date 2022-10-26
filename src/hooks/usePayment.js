import {useRef} from 'react';
export default function usePayment(){
    const cardNumber = useRef('');
    const cardHolderName = useRef('');
    const expirationDate = useRef('');
    const securityCode = useRef('');

    // Handles card number
    const handleCardNumber = e => {
        cardNumber.current = e.target.value;
    }

    // Handles card holder name
    const handleCardHolderName = e => {
        cardHolderName.current = e.target.value;
    }

    // Handles expiration date
    const handleExpirationDate = e => {
        expirationDate.current = e.target.value;
    }

    // Handles security code
    const handleSecurityCode = e => {
        securityCode.current = e.target.value;
    }

    return {
        handleCardNumber,
        handleCardHolderName,
        handleExpirationDate,
        handleSecurityCode
    };
}