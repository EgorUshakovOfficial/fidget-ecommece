import {createContext} from 'react';
import useOrderServices from '../hooks/orders/useOrderServices';
import useOrderRefundModal from '../hooks/orders/useOrderRefundModal';

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