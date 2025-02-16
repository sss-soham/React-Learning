import { useId } from "react"

export const UseId = () => {

    // const usernameId = useId();
    // const passwordId = useId();
    // const emailId = useId();

    // return(
    //     <form>
    //         <div>
    //             <label htmlFor={usernameId}>Username: </label>
    //             <input type="text" name="name" id={usernameId}/>
    //         </div>
    //         <div>
    //             <label htmlFor={emailId}>Password: </label>
    //             <input type="password" name="password" id={passwordId} />
    //         </div>
    //         <div>
    //             <label htmlFor={emailId}>Email: </label>
    //             <input type="email" name="email" id={emailId} />
    //         </div>
    //         <button type="submit">Submit</button>
    //     </form>
    // )

    // This lets you avoid calling useId for every single element that needs a unique ID.
    const id = useId();
    
    return(
        <form>
            <div>
                <label htmlFor={id + "usernameId"}>Username: </label>
                <input type="text" name="name" id={id + "usernameId"}/>
            </div>
            <div>
                <label htmlFor={id + "passwordId"}>Password: </label>
                <input type="password" name="password" id={id + "passwordId"} />
            </div>
            <div>
                <label htmlFor={id + "emailId"}>Email: </label>
                <input type="email" name="email" id={id + "emailId"} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )    
}