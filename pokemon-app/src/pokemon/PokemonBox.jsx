import { useNavigate } from "react-router-dom";
import "./box.styles.css";

function PokemonBox(props) {
    const navigate = useNavigate();

    const navigateToPokemonPage = () => {
        navigate(`/pokemons/${props.pokemon.id}`);
    };
    return (
        <div className="pokemonbox-container" onClick={navigateToPokemonPage}>
            <img src={props.pokemon.sprites.front_default} />
            <div>{props.pokemon.name}</div>
            <div>height: {props.pokemon.height}</div>
        </div>
    );
}

export default PokemonBox;
