import { useState } from "react";

export const ContactForm = () => {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // const contactData = {
        //     userName: user.userName,
        //     email: user.email,
        //     message: user.message,
        // }
        console.log(user);
    }


    // const handleInputChange = (e) => {
    //     const {name, value} = e.target;
    //     setUser((user) => {...user, [name]: value});
    // }

    return (
        <div>
            <div>

                <h1>Contact Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">Username</label>
                    <input type="text" 
                    name="userName" 
                    required 
                    autoComplete="off"
                    value={user.userName}
                    //onChange={(e) => setUserName(e.target.value)}
                    //onChange={handleInputChange}
                    onChange={(e) => setUser({...user, userName: e.target.value})}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email" 
                    required 
                    autoComplete="off"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}/>

                    <label htmlFor="message">Message</label>
                    <textarea type="password" 
                    name="message" 
                    required 
                    autoComplete="off"
                    rows="6"
                    value={user.message}
                    onChange={(e) => setUser({...user, message: e.target.value})}/>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};
