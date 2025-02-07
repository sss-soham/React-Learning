import { useState } from "react"

export const IncrementNumber = () => {

    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
    // };
    // let array = useState();
    // console.log(count);
    const [count, setCount] = useState(0);
    console.log("Parent Component Rendered");
    const handleButtonClick = () => {
        setCount(() => count+1);
        // or setCount(count => count+1) both same
    }

    return(
        <>
            <section className="main-div">
                {/* <h1>{value}</h1> */}
                <h1>{count}</h1>
                <button onClick={handleButtonClick}>Increment</button>
            </section>
            <ChildComponent />
        </>
    )
};

function ChildComponent() {
    console.log("Child Component Rendered");
    return <div className="main-div"><h2>Child Component</h2></div>;
}

