/* eslint-disable react/prop-types */
const Card = (props) =>{
    const name = props.name;
    const id = props.id;
    return(
        <>
            <h1>Name Card</h1>
            <h2>Name : {name}</h2>
            <p>U ar bot at id : {id}</p>
        </>
    )
}

export const Header = () =>{
    return(<h1 style={{textAlign:"center" , backgroundColor:"red"}}>
        Netflix
    </h1>
    )
};

export const Footer = () =>{
    return(<h1 style={{textAlign:"center" , backgroundColor:"red"}}>
        Copyright @ 2025 All Right Reserved
    </h1>
    )
}

export default Card;
