import {useState, useContext} from 'react';
import {validateCardNumber, validateExpirationDate} from '../utils/validators';
import { purchaseProducts } from '../services/purchaseProducts';
import {StateContext} from '../../../context/StateContext';
import { TRACKED_SHIPPING_COST } from '../../../data/constants';

export default function usePayment(){
    const {setLoading, subtotal, cart} = useContext(StateContext);

    // Payment information
    const [cardNumber, setCardNumber] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');

    // Shipping method
    const {shippingMethod} = JSON.parse(sessionStorage.getItem('shipping'));

    // Shipping cost
    const shippingCost = (shippingMethod === 'tracked-shipping') ? TRACKED_SHIPPING_COST : 0;

    // Total amount
    const total = subtotal + shippingCost;

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

        let isCardNumberValid = validateCardNumber(cardNumber) !== "Card number is not valid";
        let isExpirationDateValid = validateExpirationDate(expirationDate) !== "Expiration date is not valid";

        // Exits out of function if card number or expiration date is not valid
        if (isCardNumberValid===false  || isExpirationDateValid === false){
            return;
        }

        // Changes loading state of the application to true
        setLoading(true);

        // Retrieve the buyer's information and the kind of shipping method from session storage
        const userInfo = JSON.parse(sessionStorage.getItem('info'));

        // Body data
        const data = {
            userInfo:{...userInfo},
            cartInfo:cart.map(({id, quantity}) => ({id, quantity})),
            total,
            paymentInfo:{
                cardNumber,
                cardholderName,
                expirationDate,
                securityCode
            }
        }

        // Configuration options
        let configOptions = {headers:{"Content-Type":"application/json"}};

        // Charges customer for items in shopping carts
        // creates order details and sends them to customer's email
        purchaseProducts(data, configOptions)
        .then(orderDetails => console.log('Items purchased successfully'))
        .catch(err => console.log(err));

        // Change loading state of the application to false
        setLoading(false);
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