import {createContext} from 'react';
import useCustomerService from '../hooks/useCustomerService';

// Customer Context
const CustomerContext = createContext({});

// Mock data
function createData(name,email,subscribed,){
    return {name, email, subscribed};
}

const rows = [
    createData('Albert Einstein', 'alberteinstein@gmail.com', 'Yes'),
    createData('James Bond', 'jamesbond@gmail.com', 'No'),
    createData('Lebron James', 'lebronjames@gmail.com', 'No'),
    createData('Andrew Tate', 'andrewtate@gmail.com','No'),
    createData('Bernardo Epp', 'bernardoepp@gmail.com', 'Yes'),
    // createData('Albert Einstein', 'alberteinstein@gmail.com', 'Yes'),
    // createData(' Bond', 'jamesbond@gmail.com', 'No'),
    // createData('Lebron James', 'lebronjames@gmail.com', 'No'),
    // createData('Andrew Tate', 'andrewtate@gmail.com','No'),
    // createData('Bernardo Epp', 'bernardoepp@gmail.com', 'Yes'),
    // createData('Albert Einstein', 'alberteinstein@gmail.com', 'Yes'),
    // createData('James Bond', 'jamesbond@gmail.com', 'No'),
    // createData('Lebron James', 'lebronjames@gmail.com', 'No'),
    // createData('Andrew Tate', 'andrewtate@gmail.com','No'),
    // createData('Bernardo Epp', 'bernardoepp@gmail.com', 'Yes'),
];


// Customer Provider
const CustomerProvider = ({children}) => {

    let customerProps = useCustomerService(rows);

    return(
        <CustomerContext.Provider value={{...customerProps}}>
            {children}
        </CustomerContext.Provider>
    )
};

export {CustomerContext, CustomerProvider};