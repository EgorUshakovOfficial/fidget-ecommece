import {createContext} from 'react';
import useProductServices from '../hooks/products/useProductServices';

// Product context
const ProductContext = createContext({});

// Product provider
const ProductProvider = ({children}) => {
    const productProps = useProductServices();
    return (
        <ProductContext.Provider value={{...productProps}}>
            {children}
        </ProductContext.Provider>
    )
};

export {ProductContext, ProductProvider};
