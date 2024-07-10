import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
    const [pokemon, setPokemon] = useState(null);
    const { id } = useParams();
    const pokemons = JSON.parse(localStorage.getItem("pokemons"));

    useEffect(() => {
        const filteredPokemon = pokemons.find(
            (pk) => String(pk.id) === String(id)
        );
        setPokemon(filteredPokemon);
    }, []);

    return (
        <div className="m-8 flex flex-col items-center justify-center">
            <img
                src={pokemon?.sprites.other.home.front_shiny}
                className="mx-auto object-cover object-center"
                height="400"
            />
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-gray-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                        Abilities
                    </h3>

                    <div className="mt-4">
                        <ul
                            role="list"
                            className="list-disc space-y-2 pl-4 text-sm"
                        >
                            {pokemon?.abilities.map((item) => (
                                <li
                                    key={item.ability.name}
                                    className="text-gray-400"
                                >
                                    <span className="text-gray-600">
                                        {item.ability.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;
