// this is the registration form with multiple inputs 
// using useState hook - optimised version and best 
// approach


import { useState } from "react";

export const RegistrationOptimised = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            firstName: user.firstName,  
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            phoneNumber: user.phoneNumber

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
                    <input type="text" name="firstName" placeholder="Enter First Name" required value={user.firstName} onChange={handleInputChange}/>

                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input type="text" name="lastName" placeholder="Enter Last Name" required value={user.lastName} onChange={handleInputChange}/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" name="email" placeholder="Enter Email" required value={user.email} onChange={handleInputChange}/>


                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" name="password" placeholder="Enter Password" required value={user.password} onChange={handleInputChange}/>


                    <label htmlFor="phoneNumber"><b>Phone</b></label>
                    <input type="phone" name="phoneNumber" placeholder="Enter Phone Number" required value={user.phoneNumber} onChange={handleInputChange}/>


                    <p>
                        By creating an account you agree to our <a href="#">Terms & Privacy</a>.
                    </p>
                    <div>
                        <button type="submit" className="btn">Sign Up</button>
                    </div>
                </div>
            </form>
            <section>
                <p>Hello, my name is <span>{user.firstName} {user.lastName}</span></p>
                <p>My email is <span>{user.email}</span></p>
                <p>My phone number is <span>{user.phoneNumber}</span></p>
            </section>

        </>
    )
};
