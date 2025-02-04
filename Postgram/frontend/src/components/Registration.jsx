import { useState } from "react"
import { LoginPage } from "./LoginPage"
import { SignUp } from "./SignUp";

export const Registration = () => {

    const[showSign, setSign] = useState(0);


    return(
        <div>
            {
                showSign ? 
                <SignUp changeSign={()=>{setSign(0)}}/> : 
                <LoginPage changeSign={()=>{setSign(1)}}/>
            }
        </div>
    )
}