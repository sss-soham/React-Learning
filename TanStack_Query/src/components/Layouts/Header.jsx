import { NavLink } from "react-router-dom";

export const Header =() => {
    return(
        <header>
            <div>
                <NavLink to="/">React Query - TanStack Query</NavLink>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/trad">FetchOlb</NavLink>
                    </li>
                    <li>
                        <NavLink to="/rq">FetchRQ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/infinite">Infinite Scroll</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};