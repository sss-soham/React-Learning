/* eslint-disable react/prop-types */
import { useId, useRef } from "react"

export const FrowardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <BeforeReact19 label="username" ref={username}/>
            <BeforeReact19 label="password" ref={password}/>
            <button>Submit</button>
        </form>
    )
};

// Before React v19
// const BeforeReact19 = forwardRef((props, ref) => {
//     const id = useId();
//     return(
//         <div>
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text"  ref={ref}/>
//         </div>
//     );
// });

// After React v19
const BeforeReact19 = (props) => {
    const id = useId();
    return(
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text"  ref={props.ref}/>
        </div>
    );
};