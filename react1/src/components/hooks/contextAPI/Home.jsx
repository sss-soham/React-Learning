import { useBioContext } from "."

export const Home =() => {
    const {myName, myAge} = useBioContext;
    return (
        <section
        className={`p-4 h-lvh font-display tracking-wider
        flex flex-col justify-center items-center bg-zinc-700
        text-white`}>
            <h1>Hello Context API. My name is {myName}, I am {myAge} years old.</h1>
        </section>
    )
}