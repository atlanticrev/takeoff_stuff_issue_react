import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";
import Contacts from "./Contacts";

import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

function App () {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/contacts">
                        <Contacts />
                    </PrivateRoute>
                    <Route path="*">
                        <Redirect to="/contacts" />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
