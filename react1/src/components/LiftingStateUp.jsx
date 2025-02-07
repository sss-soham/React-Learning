import { useState } from "react";

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");

    return(
        <>
            <InputComponent inputValue = {inputValue} setInputValue={setInputValue}/>
            <DisplayComponent inputValue = {inputValue}/>
        </>
    )
};

const InputComponent = (props) => {
    const {inputValue, setInputValue} = props;
    return(
        <>
            <input type="text" 
            placeholder="enter your name" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}/>
        </>
    )
};

const DisplayComponent = (props) => {
    const {inputValue} = props;
    return <p>The current input value is: {inputValue}</p>;
};