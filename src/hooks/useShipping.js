import {useState} from 'react';

export default function useShipping(){
    const [shippingMethod, setShippingMethod] = useState('');

    // Handles shipping method
    const handleShippingMethod = e => {
        setShippingMethod(e.target.value);
    }

    return {
        shippingMethod,
        setShippingMethod,
        handleShippingMethod
    };
}