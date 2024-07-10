import { createBrowserRouter } from "react-router-dom";
import PokemonList from "./pokemon/PokemonList";
import Login from "./login";
import PrivateRoute from "./PrivateRoute";
import Pokemon from "./pokemon/Pokemon";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/pokemons",
        element: (
            <PrivateRoute>
                <PokemonList />
            </PrivateRoute>
        ),
    },
    {
        path: "/pokemons/:id",
        element: (
            <PrivateRoute>
                <Pokemon />
            </PrivateRoute>
        ),
    },
]);

export default router;
