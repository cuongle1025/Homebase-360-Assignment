import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [addUserModal, setAddUserModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <AppContext.Provider value={{ addUserModal, setAddUserModal, successModal, setSuccessModal, user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};