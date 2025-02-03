export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };
    const handleHover = () => {
        alert(`It's hovering me, ahahahah !`);
    };

    return(
        <>
            <WelcomeUser 
            onClick={() => HandleWelcomeUser('Soham')}
            onMouseEnter={handleHover}/>
        </>
    )
}

const WelcomeUser = (props) => {
    const { onClick , onMouseEnter} = props;
    const handleGreeting = () => {
        console.log(`Hey User, Welcome !`);
        onClick();
    }
    return(
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover Me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}