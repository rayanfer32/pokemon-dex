import { useContext } from "react";
import { PokemonContext } from "../Store/Context";

export default function usePokemon() {
    return useContext(PokemonContext);
}