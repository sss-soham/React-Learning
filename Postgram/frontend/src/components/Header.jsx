import { useState } from "react";
import { FaApple } from "react-icons/fa";

export const Header = () => {

    const [time, setTime] = useState('');
    setInterval(() => {
        const now = new Date();
        const currTime = now.toLocaleTimeString();
        setTime(currTime);
    }, 1000);

    return(
        <>
            <FaApple></FaApple>
            <h3>{time}</h3>
        </>
    )
};