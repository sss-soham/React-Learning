import { useLoaderData } from "react-router-dom";
import { Card } from "../UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    console.log("Loaded API Key:", import.meta.env.VITE_API_KEY);

    return (
        <>
            <ul className="container grid grid-four--cols">
            {moviesData.Search.map((curMovie) => {
                return <Card key={curMovie.imdbID} curMovie={curMovie}/>;
            })}
            </ul>
            
        </>
    )
};