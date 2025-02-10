import { useState, useEffect } from "react";

export const CleanUpFunction = () => {

    const [count, setCount] = useState(0);
    // setInterval(() => {
    //     setCount(count + 1);
    // }, 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev+1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <div>
                <p>My Subscribers on Youtube</p>
                <div>{count}</div>
                <h3>Subscribers <br /> Realtime Counter</h3>
            </div>           
        </div>
    )
}
