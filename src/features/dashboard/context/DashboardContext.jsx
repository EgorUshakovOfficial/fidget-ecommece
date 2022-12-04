import { createContext } from "react";
import usePage from "../hooks/usePage";

// Dashboard Context
const DashboardContext = createContext({});

const DashboardProvider = ({children}) => {
    const pageProps = usePage();
    return (
        <DashboardContext.Provider value={{...pageProps}}>
            {children}
        </DashboardContext.Provider>
    )
};

export {DashboardContext, DashboardProvider};
