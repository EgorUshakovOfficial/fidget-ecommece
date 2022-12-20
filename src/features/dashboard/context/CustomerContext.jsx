import {createContext} from 'react';
import useCustomerService from '../hooks/customers/useCustomerService';

// Customer Context
const CustomerContext = createContext({});

// Customer Provider
const CustomerProvider = ({children}) => {

    let customerProps = useCustomerService();

    return(
        <CustomerContext.Provider value={{...customerProps}}>
            {children}
        </CustomerContext.Provider>
    )
};

export {CustomerContext, CustomerProvider};