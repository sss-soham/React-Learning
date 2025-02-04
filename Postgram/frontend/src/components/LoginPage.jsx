export const LoginPage = (props) => {
    return(
        <div>
            <form>

                <input type="text"
                placeholder="Username"
                name="username"
                 />
                <br />
                <input type="password"
                placeholder="Password"
                name="password"
                 />
                <br />
                <button>Login In</button>
                <br />
                <button onClick={props.changeSign}>Sign Up</button>
               
            </form>
        </div>
    )
}