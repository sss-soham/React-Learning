import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {

    // const params = useParams();
    // console.log(params);

    const movieDetails = useLoaderData();
    console.log(movieDetails);

    const {Poster, Title, Type, Year, Plot} = movieDetails;


    return (
        <li className="hero-container hero-main-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} alt={Title} className="poster"/>
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                        <h4 className="ticket__movie-title">{Title}</h4>
                        <p>{Plot}</p>
                        <p className="ticket__current-price">Year: {Year} </p>
                        <p className="ticket__current-price">Type: {Type}</p>
                        <button className="ticket__buy-btn">Watch Now</button>
                    </div>
                </div>
            </div>
        </li>
    )
};