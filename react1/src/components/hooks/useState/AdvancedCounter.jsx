import {useState} from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleReset = () => {
        setCount(0);
        setStep(1);
    };

    const handleIncrement = () => {
        setCount(count+step);
    };

    const handleDecrement = () => {
        setCount(count-step);
    };

    return (
        <>
            <div
            className="container m-8"
            >

                <h1>useState Hook!</h1>
                <br />
                <p>Count : {count}</p>
                <input type="number" 
                value={step} 
                onChange={(e) => setStep(Number(e.target.value))}/>
                <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
                <button onClick={handleDecrement} disabled={count <=0}>Decrement</button>
                <button onClick={handleReset} disabled={count === 0}>Reset</button>
            </div>
        </>

    )
};
