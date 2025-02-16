// implementing counter using useReducer instead of useState
import { useReducer, useEffect } from "react"

export const ReducerComponent = () => {

    const initialState = {
        count: 0,
    };

    const reducer = (state, action) => {
        switch(action.type){
            case "INCREMENT":
                return {...state, count: state.count + 1};
            case "DECREMENT":
                return {...state, count: state.count - 1};
            case "RESET":
                return {...state, count: 0};
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        console.log(state);
    }, [state]);

    return(
        <>
            <div
            className="p-4 h-lvh flex flex-col justify-center items-center">
                <h1>{state.count}</h1>
                <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
                <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
            </div>
        </>
    )
}