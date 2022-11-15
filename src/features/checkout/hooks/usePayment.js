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

    const payOnSubmit = e => {
        // Prevent default form from being submitted to the server
        e.preventDefault();

        // Retrieve the buyer's information and the kind of shipping method from session storage
        const info = JSON.parse(sessionStorage.getItem('info'));
        const shipping = JSON.parse(sessionStorage.getItem('shipping'));

        // Payment information
        const payment = {
            cardNumber: cardNumber.current,
            cardHolderName: cardHolderName.current,
            expirationDate: expirationDate.current,
            securityCode: securityCode.current
        }

        // Fetch stripe api here...
    }

    return {
        cardNumber,
        cardHolderName,
        expirationDate,
        securityCode,
        handleCardNumber,
        handleCardHolderName,
        handleExpirationDate,
        handleSecurityCode,
        payOnSubmit
    };
}