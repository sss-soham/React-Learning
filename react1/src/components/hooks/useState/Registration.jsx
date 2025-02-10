// this is the registration form with multiple inputs 
// using useState hook - complex and lengthy

import { useState } from "react";

export const Registration = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [phone, setPhone] = useState("");
    
    const handleInputChange = (e) => {

        const {name, value} = e.target;

        switch(name){
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            firstName,
            lastName,
            email,
            password,
            phone
        };
        console.log(userData);
    };
    

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>

                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input type="text" name="firstName" placeholder="Enter First Name" required value={firstName} onChange={handleInputChange}/>

                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input type="text" name="lastName" placeholder="Enter Last Name" required value={lastName} onChange={handleInputChange}/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" name="email" placeholder="Enter Email" required value={email} onChange={handleInputChange}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" name="password" placeholder="Enter Password" required value={password} onChange={handleInputChange}/>

                    <label htmlFor="phone"><b>Phone</b></label>
                    <input type="phone" name="phone" placeholder="Enter Phone Number" required value={phone} onChange={handleInputChange}/>

                    <p>
                        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
                    </p>
                    <div>
                        <button type="submit" className="btn">Sign Up</button>
                    </div>
                </div>
            </form>
            <section>
                <p>Hello, my name is <span>{firstName} {lastName}</span></p>
                <p>My email is <span>{email}</span></p>
                <p>My phone number is <span>{phone}</span></p>
            </section>
        </>
    )
};
