import {createContext} from 'react';
import useAuth from '../hooks/useAuth';

// Authentication context
const AuthContext = createContext({});

// Authentication provider
const AuthProvider = ({children}) => {
    const authProps = useAuth();

    return(
        <AuthContext.Provider value={{...authProps}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};