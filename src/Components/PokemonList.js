import React from 'react'
import PokeCard from './PokeCard'
import { useAxiosGet } from "../Hooks/ApiCall"
import { useState } from "react"

import usePokemon from '../Hooks/usePokemon';

import env from "../env/base"
import NavButtons from './NavButtons';

export default function PokemonList() {

    // const demo = useContext(PokemonContext);
    const userData = usePokemon();

    const [currentPageUrl, setCurrentPageUrl] = useState(env.api)

    
    let display = null

    let res = useAxiosGet(currentPageUrl)
    
    let pokemons = []
    let prevPageUrl
    let nextPageUrl

    if(!res.loading && res.data !== null ){
        pokemons = res.data.results
        nextPageUrl = res.data.next
        prevPageUrl = ( res.data.previous !== null ) ? res.data.previous : currentPageUrl
    }


    if (userData.state.showFavorites) {
        display = userData.fav.length < 1 ? <h1 className="no-favs">No Favorite Pokemons</h1> : userData.fav.map(pokemon => <PokeCard key={pokemon.name} pokemon={pokemon} fav={true}/>)
    }
    else {
        display =  pokemons.map(pokemon => <PokeCard key={pokemon.name} pokemon={pokemon} />) 
    }
    
    function gotoPrevPage(){
        setCurrentPageUrl(prevPageUrl)
    }

    function gotoNextPage(){
        setCurrentPageUrl(nextPageUrl)
    }

    return (
        <div className="pokemon-list">
            { !res.loading && 
                userData.state.showFavorites ? null : <NavButtons gotoNextPage={() => gotoNextPage} />
            }
            { res.loading ? <h1>Loading...</h1> : display }
        </div>
    )
}
