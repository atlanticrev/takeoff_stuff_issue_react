import React from 'react';
import { Route, Redirect } from "react-router-dom";

import useAuthContext from '../hooks/useAuthContext';

export default function PrivateRoute ({ children, ...rest }) {
    let authApi = useAuthContext();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                authApi.user ? (
                    children
                ) : (
                    <Redirect to={{pathname: "/login", state: { from: location }}} />
                )
            }
        />
    );
}