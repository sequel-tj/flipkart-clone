import { createContext, useState } from "react";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [account, setAccount] = useState('');
    const [open, setOpen] = useState(false);
    return (
        <DataContext.Provider value={
            {
                account,
                setAccount,
                open,
                setOpen
            }
        }>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;