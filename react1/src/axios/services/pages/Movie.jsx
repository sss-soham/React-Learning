import { useEffect, useState } from "react";
import { Card } from "../../UI/Card";
import { getMovie } from "../GetService";

export const Movie = () => {
    const [data, setData] = useState([]);
    
    //const res = await axios.get(API)
    const getMovieData = async() => {
        try {   
            const res = await getMovie();
            console.log(res.data.Search);
            setData(res.data.Search);
        } catch(error) {
            console.log("Error message: ", error.message);
            console.log("Error status: ", error.response.status);
            console.log("Error data: ", error.response.data);
        }
    }

    useEffect(() => {
        getMovieData();
    },[])

    return(
        <ul>
            {
            data.map((curElem) => {
                return <Card 
                key={curElem.imdbID} 
                movieData={curElem}/>
            }
            )
            }
        </ul>
    )
}