import {createContext} from 'react';
import {useShoppingService} from '../features/shopping/index';

// State context
const StateContext = createContext({});

// State provider
const StateProvider = ({children}) => {
    const homeProps = useShoppingService();
    return (
        <StateContext.Provider value={{...homeProps}}>
            {children}
        </StateContext.Provider>
    )
}

export {StateProvider, StateContext};
