import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import useAuthContext from "./hooks/useAuthContext";

export default function Login () {
    let history = useHistory();
    let authApi = useAuthContext();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit (e) {
        e.preventDefault();
        const formIsValid = formValidation();
        if (formIsValid) {
            // Mock authorization
            authApi.signIn({login, password})
                .then(() => {
                    history.replace({pathname: "/contacts"});
                });
        }
    }

    function onReset () {
        setLogin('');
        setPassword('');
    }

    function formValidation () {
        return login !== '' && password !== '';
    }

    return (
        <div className="login-form">
            <h3 className="login-text">Authentication</h3>
            <form action="#">
                <label>
                    <input
                        name="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        id="login"
                        type="text"
                        placeholder="Login"
                        required
                    />
                </label>
                <label>
                    <input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </label>
                <div className="login-controls">
                    <button
                        name="submit"
                        type="submit"
                        onClick={onSubmit}
                    >
                        submit
                    </button>
                    <button
                        name="reset"
                        type="reset"
                        onClick={onReset}
                    >
                        reset
                    </button>
                </div>
            </form>
        </div>
    );
}