import {createContext} from 'react';

// Order context
const OrderContext = createContext({});

// Create mock data
function createProduct(number, email, amount, date, status){
    return {number, email, amount, date, status}
};

const orders = [
    createProduct('A313451451', 'alberteinstein@gmail.com', 21.33, 'July 22, 2012', 'bought'),
    createProduct('A313451452', 'egorushakov@gmail.com', 23.33, 'July 26, 2012', 'shipped'),
    createProduct('A313451454', 'johndoe@gmail.com', 12.33, 'July 20, 2012', 'bought'),
    createProduct('A313451457', 'robertsmith@gmail.com', 2.33, 'July 22, 2012', 'bought')
];

// Order provider
const OrderProvider = ({children}) => {
    return (
        <OrderContext.Provider value={{orders}}>
            {children}
        </OrderContext.Provider>
    )
};

export {OrderContext, OrderProvider};