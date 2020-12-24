import React, { useState, useEffect } from 'react';

export default function Overlay () {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setIsShown(true);
    }, [isShown]);

    return (
        <div className={isShown ? "overlay show" : "overlay"} />
    );
}