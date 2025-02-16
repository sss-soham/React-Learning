import { createContext, use } from "react";

export const BioContext = createContext();

export const BioProvider = ({children}) => {
    const myName = "soham";
    const myAge = 21;

    return <BioContext.Provider value={{myName, myAge}}>
        {children}
    </BioContext.Provider>;
};

// custom hooks
export const useBioContext = () => {
    const context = use(BioContext);
    if(context === undefined){
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context;
};