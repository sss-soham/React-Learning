import { useEffect, useState } from "react";

export const HowNotToFetchApi = () => {

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
    // const fetchPokemon =  () => {
    //     fetch(API)
    // .then((res) => res.json())
    // .then((data) => {
    //     setPokemon(data);
    //     setLoading(false);
    // })       
    // .catch((error) => {
    //     console.log(error);
    //     setError(error);
    //     setLoading(false);
    // })
    // };
    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally { 
            setLoading(false);
        }
    };

    useEffect(() => {
    fetchPokemon();
    }, []);

    console.log(pokemon);

    if(loading) {
        return <h1>Loading...</h1>
    };

    if(error) {
        return <h1>Error: {error.message}</h1>
    };

    return (
        <section className="container">

            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img 
                            src={pokemon.sprites.other.dream_world.front_default} 
                            alt={pokemon.name}
                            className="pokemon-image" />
                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div className="grid-cols-3">
                        <div className="pokemon-info">
                            <p>Height: <span>{pokemon.height}</span></p>
                        </div>
                        <div className="pokemon-info">
                            <p>Weight: <span>{pokemon.weight}</span></p>
                        </div>
                        <div className="pokemon-info">
                            <p>Speed: <span>{pokemon.stats[5].base_stat}</span></p>
                        </div>
                        

                    </div>
                </li>
            </ul>
    </section>
    )
};
