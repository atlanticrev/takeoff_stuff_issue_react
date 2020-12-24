import React, { useState } from "react";

export default function useAuthContext () {
    const [user, setUser] = useState(null);

    function signin (data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                setUser(data);
                console.log('authorized', data);
                resolve();
            }, 500);
        });
    }

    function signout () {
        return new Promise((resolve) => {
            setTimeout(() => {
                setUser(null);
                console.log('unauthorized');
                resolve();
            }, 500);
        });
    }

    return {
        user,
        signin,
        signout
    };
}