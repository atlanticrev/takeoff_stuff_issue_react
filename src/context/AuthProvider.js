import React from "react";

import useAuthContext from '../hooks/useAuthContext';
import authContext from '../context/AuthContext';

export default function AuthProvider ({ children }) {
    // Context value
    const auth = useAuthContext();
    return (
        // Filling the context
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}