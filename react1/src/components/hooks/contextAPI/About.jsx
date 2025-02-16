import { use } from "react"
import { BioContext } from "."

export const About =() => {
    // const {myName, myAge} = useContext(BioContext);
    // const {myName, myAge} = use(BioContext);

    const newHook = true;
    let myName, myAge;
    if(newHook) {
        ({myName, myAge} = use(BioContext));
    }

    return (
        <section
        className={`p-4 h-lvh font-display tracking-wider
        flex flex-col justify-center items-center bg-zinc-700
        text-white`}>
            <h1>Hello Context API(About). My name is {myName}, I am {myAge} years old.</h1>
        </section>
    )
}