import { createContext } from "react";
import useDashboardServices from "../hooks/useDashboardServices";
import usePage from "../hooks/usePage";

// Dashboard Context
const DashboardContext = createContext({});

const DashboardProvider = ({children}) => {
    const pageProps = usePage();
    const dashboardProps = useDashboardServices();
    return (
        <DashboardContext.Provider value={{
            ...pageProps,
            ...dashboardProps
        }}>
            {children}
        </DashboardContext.Provider>
    )
};

export {DashboardContext, DashboardProvider};
