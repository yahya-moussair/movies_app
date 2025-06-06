import { createContext, useContext } from "react";

const MyContext = createContext();

const AppProvider = ({ children }) => {
    const name = 'yahya'

    const data = {
        name
    };
    return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

const useAppContext = () => useContext(MyContext);

export { AppProvider, useAppContext };
