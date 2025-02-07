import { useState } from "react";

export const DerivedState = () => {
    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState([
        {name: "Alice", age: 25},
        {name: "Bob", age: 30},
        {name: "Charlie", age: 35},
    ]);

    console.log(users);
    const userCount = users.length;
    const averageAge = (users.reduce((accum, curElem) => accum + curElem.age, 0))/userCount;
    
    return(
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {
                    users.map((user, index) => (
                        <li key={index}>
                            {user.name} - {user.age} years old
                        </li>
                    ))
                }
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Average Age: {averageAge}</p>
        </div>
    )
};