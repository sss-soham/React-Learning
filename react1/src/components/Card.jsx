/* eslint-disable react/prop-types */

export const Card = (props) =>{
    const children = props.children;
    const {name ,url , rating , description , genre} = props.data;
    const pdata = "Harshal";
    const handleClick = (user) =>{
        alert(`hey i am event on : ${user}`)
    }

    return (
        <li style={{border:"2px solid black" , padding:"2em" , listStyle:"none"}}>
            <div>
                <img width="100%" height="30%" src={url} alt="" />
            </div>
            <h1>Name : {name}</h1>
            <h1 className="">Rating : {rating}</h1>
            <h1>Description : {description}</h1>
            <h1>Genre : {genre.join(", ")}</h1>
            <h1>{children}</h1>
            <button onClick={()=>handleClick(pdata)} className="ui button" style={{border:"1px solid black"}}>Watch now</button>
        </li>
    )
}