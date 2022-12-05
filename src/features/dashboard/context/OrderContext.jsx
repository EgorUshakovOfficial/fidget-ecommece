import {createContext} from 'react';
import useOrderServices from '../hooks/useOrderServices';

// Order context
const OrderContext = createContext({});


// Order provider
const OrderProvider = ({children}) => {
    const orderProps = useOrderServices();
    return (
        <OrderContext.Provider value={{...orderProps}}>
            {children}
        </OrderContext.Provider>
    )
};

export {OrderContext, OrderProvider};