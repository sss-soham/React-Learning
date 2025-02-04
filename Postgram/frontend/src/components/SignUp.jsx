export const SignUp = (props) => {
    return(
        <div>
            <form>
                <input 
                type="text" 
                name="Name-full" 
                placeholder="Enter Full Name"
                required />
                <br />
                <input type="email" 
                name="Email" 
                placeholder="Enter Email"
                required />
                <br />
                <input type="number" 
                name="phone" 
                placeholder="Enter Number"
                required />
                <br />
                <input type="text" 
                name="Username" 
                placeholder="Enter Username" 
                required/>
                <input type="number" 
                name="Age" 
                placeholder="Enter Age"
                required />
                <br />
                <button>Sign Up</button>
                <br />
                <button onClick={props.changeSign}>SignIn</button>
            </form>
        </div>
    )
}