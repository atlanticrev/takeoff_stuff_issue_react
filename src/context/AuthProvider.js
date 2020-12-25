import React from "react";

import useAuthApi from '../hooks/useAuthApi';
import AuthContext from "./AuthContext";

export default function AuthProvider ({ children }) {
    // Context value
    const authApi = useAuthApi();
    return (
        // Filling the context
        <AuthContext.Provider value={authApi}>
            {children}
        </AuthContext.Provider>
    );
}