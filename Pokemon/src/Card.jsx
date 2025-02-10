export const Card = (props) => {
    const data = props.curPokemon;
    const name = data.species.name;
    const image = data.sprites.other.dream_world.front_default;

    return (
        <>
            <h2>{name}</h2>
            <img src={image} alt="" />
        </>
    )
}