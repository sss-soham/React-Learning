import "./EV.css";

export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Hey I am onClick!");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        alert("Hey I am onClick!");
    };

    const handleWelcome = (user) => {
        console.log(`Hey ${user}!`);
    };

    return(
        <>
            {/*  */}
            <button onClick={handleButtonClick}>Click Me 1</button>
            <br />

            {/*  */}
            <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
            <br/>

            {/* Inline Event Handler */}
            <button onClick={(event) => console.log(event)}>Click Me 2</button>
            <br/>

            {/* Function component with Inline Arrow Function */}
            <button onClick={() => alert("Inline Event Function")}>Inline Arrow Function</button>
            <br/>

            {/* Passing Arguments to event Handler */}
            <button onClick={() => handleWelcome("Soham")}>Welcome Click</button>
        </>
    )
}