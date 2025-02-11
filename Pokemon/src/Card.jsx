export const Card = (props) => {
    const data = props.curPokemon;
    const name = data.species.name;
    const image = data.sprites.other.dream_world.front_default;
    const type = data.types.map((curType) => curType.type.name).join(", ");
    const height = data.height;
    const weight = data.weight;
    const speed = data.stats[5].base_stat;
    const exp = data.base_experience;
    const attack = data.stats[1].base_stat;
    const ability = data.abilities.map((curAbility) => curAbility.ability.name).slice(0, 1);
    
    return (
        <>
            <li className="pokemon-card">
                <figure>
                    <img src={image} alt={name} className="pokemon-image"/>
                </figure>
                <h1 className="pokemon-name">{name}</h1>
                <div className="pokemon-info pokemon-highlight">
                    <p>Type : {type}</p>
                </div>
                <div className="grid-three-cols">
                    <p className="pokemon-info">
                        <span>Height : {height}</span>
                    </p>
                    <p className="pokemon-info">
                        <span>Weight : {weight}</span>
                    </p>
                    <p className="pokemon-info">
                        <span>Speed : {speed}</span>
                    </p>
                </div>
                <div className="grid-three-cols">
                    <div className="pokemon-info">
                        <p>{exp}</p>
                        <span>Exp</span>
                    </div>
                    <div className="pokemon-info">
                        <p>{attack}</p>
                        <span>Attack</span>
                    </div>
                    <div className="pokemon-info">
                        <p>{ability}</p>
                        <span>Ability</span>
                    </div>
                </div>                    
            </li>
        </>
    )
}