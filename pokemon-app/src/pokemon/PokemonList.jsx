import { useState, useEffect } from "react";
import PokemonBox from "./PokemonBox";
import Search from "./Search";
import "./list.styles.css";

function PokemonList() {
    const LIMIT = 20;
    const TOTAL_POKEMONS = 1302;
    const [initialPokemons, setInitialPokemons] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [prevLink, setPrevLink] = useState(null);
    const [nextLink, setNextLink] = useState(null);
    const [currentLink, setCurrentLink] = useState(
        "https://pokeapi.co/api/v2/pokemon/?offset=0"
    );
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState("");
    const [range, setRange] = useState(0);
    const [max, setMax] = useState(0);
    const [sorting, setSorting] = useState("ASC");

    const fetchPokemons = () => {
        fetch(currentLink)
            .then((res) => res.json())
            .then(async (data) => {
                const pokemonPromises = [];
                data.results.map((item) => {
                    pokemonPromises.push(
                        fetch(item.url).then((res) => res.json())
                    );
                });

                const result = await Promise.all(pokemonPromises);
                let maxHeight = 0;
                result.forEach((item) => {
                    maxHeight = Math.max(maxHeight, item.height);
                });
                setRange(maxHeight);
                setMax(maxHeight);
                setPokemons(result);
                setInitialPokemons(result);
                setPrevLink(data.previous);
                setNextLink(data.next);
                const url = new URL(currentLink);
                setCurrentPage(
                    parseInt(url.searchParams.get("offset")) / LIMIT
                );
                localStorage.setItem("pokemons", JSON.stringify(result));
            });

        const cleanup = () => {
            console.log("the cleanup function is running");
        };

        return cleanup;
    };
    // dependency array
    useEffect(fetchPokemons, [currentLink]);

    useEffect(() => {
        const filteredPokemons = initialPokemons
            .filter((item) => String(item.name).includes(search))
            .filter((item) => item.height <= range)
            .sort((item1, item2) => {
                if (sorting === "ASC") {
                    return item1.height - item2.height;
                } else {
                    return item2.height - item1.height;
                }
            });
        setPokemons(filteredPokemons);
    }, [search, range, sorting]);

    const getPrevPages = () => {
        const arr = [];

        for (let i = Math.max(currentPage - 2, 0); i < currentPage; i++) {
            arr.push(i);
        }

        return arr;
    };

    const getNextPages = () => {
        const arr = [];

        for (
            let i = currentPage + 1;
            i < Math.min(currentPage + 3, Math.ceil(TOTAL_POKEMONS / LIMIT));
            i++
        ) {
            arr.push(i);
        }

        return arr;
    };

    const updatePage = (page) => {
        const newCurrentLink = `https://pokeapi.co/api/v2/pokemon/?offset=${
            page * LIMIT
        }`;
        setCurrentLink(newCurrentLink);
    };

    return (
        <div className="container">
            <h1>Welcome To Our Pokemon App</h1>
            <p>Here you can find all the pokemon you need</p>
            <Search search={search} setSearch={setSearch} />
            <p>Default range slider:</p>
            <input
                type="range"
                min="1"
                max={max}
                step="1"
                value={range}
                onChange={(ev) => setRange(ev.target.value)}
            />
            <span>{range}</span>

            <label for="cars">Choose a car:</label>

            <select
                name="sorting"
                value={sorting}
                onChange={(ev) => setSorting(ev.target.value)}
            >
                <option value="ASC">Sort Height ASC</option>
                <option value="DESC">Sort Height DESC</option>
            </select>
            <div className="pokemon-list">
                {pokemons.map((pokemon) => {
                    return <PokemonBox key={pokemon.name} pokemon={pokemon} />;
                })}
            </div>
            <div className="footer">
                <button
                    disabled={prevLink === null}
                    onClick={() => setCurrentLink(prevLink)}
                >
                    prev
                </button>
                {getPrevPages().map((item) => (
                    <button
                        onClick={() => {
                            updatePage(item);
                        }}
                    >
                        {item + 1}
                    </button>
                ))}
                <span>{currentPage + 1}</span>
                {getNextPages().map((item) => (
                    <button
                        onClick={() => {
                            updatePage(item);
                        }}
                    >
                        {item + 1}
                    </button>
                ))}
                <button
                    disabled={nextLink === null}
                    onClick={() => setCurrentLink(nextLink)}
                >
                    next
                </button>
            </div>
        </div>
    );
}

export default PokemonList;
