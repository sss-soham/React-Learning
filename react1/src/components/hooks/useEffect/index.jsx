import { useEffect, useState } from "react";
import "./index.css"

export const ReactUseEffect = () => {
    
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log("Count value: ", count);

    // }, [count]);

    const [date, setDate] = useState();
    useEffect(() => {
        
    }, []);
    setInterval(() => {
        const updatedDate = new Date();
        setDate(updatedDate.toLocaleTimeString());
    }, 1000);

    
    return (
        <div className="text-center">

            <h1>Hello, useEffect!</h1>
            {/* <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> */}
            <h1>Date: {date}</h1>
        </div>
    );
};
