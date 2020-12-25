import { useState } from "react";

export default function useAuthApi () {
    const [user, setUser] = useState(null);

    function signIn (data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                setUser(data);
                console.log('authorized', data);
                resolve();
            }, 500);
        });
    }

    function signOut () {
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
        signIn,
        signOut
    };
}