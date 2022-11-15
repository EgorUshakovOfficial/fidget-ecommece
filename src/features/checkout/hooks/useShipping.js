import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function useShipping(){
    const shipping = sessionStorage.getItem('shipping');

    // Form value of shipping method
    const [shippingMethod, setShippingMethod] = useState(() => shipping ? JSON.parse(shipping).shippingMethod : 'free-shipping');

    // Navigation
    const navigate = useNavigate();

    // Handles shipping method
    const handleShippingMethod = e => {
        setShippingMethod(e.target.value);
    }

    // Shipping submit form
    const shippingOnSubmit = e => {
        // Prevent default behaviour of form from being submitted to the server
        e.preventDefault();

        // Save form value of the shipping method to session storage
        sessionStorage.setItem('shipping', JSON.stringify({ shippingMethod }))

        // Navigate to checkout payment route
        navigate('/checkout/payment');
    }

    return {
        shippingMethod,
        handleShippingMethod,
        shippingOnSubmit
    };
}