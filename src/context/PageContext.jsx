import { createContext } from "react";
import usePage from "../hooks/usePage";

// Navigation context
const PageContext = createContext({});

const PageProvider = ({children}) => {
    const pageProps = usePage();
    return (
        <PageContext.Provider value={{...pageProps}}>
            {children}
        </PageContext.Provider>
    )
};

export {PageContext, PageProvider};
