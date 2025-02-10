import { useState } from "react";

export const LoginForm = () => {
    const [user, setUser] = useState({
        userName: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            userName: user.userName,
            password: user.password,
        };
        console.log(loginData);

    };


    return (
        <div>
            <div>
                <h1>Login Form</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username" 
                required 
                autoComplete="off"
                value={user.userName}
                onChange={(e) => setUser({...user, userName: e.target.value})}/>


                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                required 
                autoComplete="off"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}   />


                <button type="submit">Login</button>
            </form>
        </div>
    );
};