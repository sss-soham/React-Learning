import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card";
import "./index.css"

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=224";

    const fetchPokemon = async() => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            
            const detailPokemon = data.results.map( async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            });

            const detailedResponse = await Promise.all(detailPokemon);
            console.log(detailedResponse);
            setPokemon(detailedResponse);
        }  catch(error) {
            console.log(error);
            setError(error);
        }   finally{
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPokemon();
    }, []);

    //searching
    const searchPokemon = pokemon.filter(
        (curPokemon) => curPokemon.name.toLowerCase().includes(search.toLowerCase())
    )
    
    if(error) return <h1>{error.message}</h1>;

    if(loading) return <h1>Loading ...</h1>;

    return (
        <section className="container">
            <header>
                <h1>Let's Search Pokemon !</h1>
            </header>
            <div className="pokemon-search">
                <input type="text" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Pokemon"/>
            </div>
            <div>
                <ul className="cards">
                {searchPokemon.map((curPokemon) => {
                    return <Card key={curPokemon.id} curPokemon={curPokemon}/>
                })}            
                </ul>
            </div>           
        </section>
    )
};

export default Pokemon;