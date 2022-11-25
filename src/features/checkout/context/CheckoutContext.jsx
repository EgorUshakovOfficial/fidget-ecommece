import {createContext} from 'react';
import useInformation from '../hooks/useInformation';
import usePayment from '../hooks/usePayment';
import useShipping from '../hooks/useShipping';

// Create context
const CheckoutContext = createContext({});

const CheckoutProvider = ({children}) => {
    // Information, shipping and payment props
    const infoProps = useInformation();
    const shippingProps = useShipping();
    const paymentProps = usePayment();

    return (
        <CheckoutContext.Provider value={{
            ...infoProps,
            ...shippingProps,
            ...paymentProps,
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export {CheckoutContext, CheckoutProvider};