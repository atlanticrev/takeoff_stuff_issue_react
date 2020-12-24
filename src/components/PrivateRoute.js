import React from 'react';
import { Route, Redirect } from "react-router-dom";

import useAuth from '../hooks/useAuth';

export default function PrivateRoute ({ children, ...rest }) {
    let auth = useAuth();

    console.log(rest, auth, auth.user);

    return (
        <Route
            {...rest}
            // @todo read more about "render props"
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect to={{pathname: "/", state: { from: location }}} />
                )
            }
        />
    );
}