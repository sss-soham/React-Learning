/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { memo, useCallback, useState } from "react";

export const UseCallback = () => {

    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("increment");
        setCount((prev) => prev+1);
    }, []);
    // const decrement = useCallback(() => {
    //     console.log("decrement");
    //     setCount((prev) => prev-1);
    // }, []);
    const decrement = () => {
        console.log("decrement");
        setCount((prev) => prev-1);
    };

    return(
        <>
            <h1>Count : {count}</h1>
            <Button onClick={increment}>Increment </Button>
            <br />
            <Button onClick={decrement}>Decrement </Button>
        </>
    )
};

export const Button = memo(({onClick, children}) => {
    console.log("Button re-rendered:", children);
    return(
        <button onClick={onClick}>{children}</button>
    )
});