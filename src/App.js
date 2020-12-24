import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Contacts from "./Contacts";

import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

function App () {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <PrivateRoute path="/contacts">
                            <Contacts />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
