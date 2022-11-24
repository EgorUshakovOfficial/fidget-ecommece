import {createContext, useEffect, useState} from 'react';
import {useCartService} from '../features/shopping/index';
import {api} from '../lib/api';

// State context
const StateContext = createContext({});

// State provider
const StateProvider = ({children}) => {
    // Cart services
    const homeProps = useCartService();

    // Product for sale
    const [productsForSale, setProductsForSale] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(false);

    // Fetch products for sale from the endpoint
    useEffect(() => {
        api
        .get('/api/products')
        .then(res => {
            setProductsForSale([...res.data]);
        })
        .catch(err => {
           console.log(err);
        })
    }, [])
    return (
        <StateContext.Provider
            value={{
                ...homeProps,
                productsForSale,
                setProductsForSale,
                loading,
                setLoading
        }}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext};
