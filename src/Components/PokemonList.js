import React from 'react'
import PokeCard from './PokeCard'
import { useAxiosGet } from "../Hooks/ApiCall"
import { useState } from "react"

export default function PokemonList() {

    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    
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


    display = pokemons.map(pokemon => <PokeCard key={pokemon.name} pokemon={pokemon} />) 


    return (
        <div className="pokemon-list">
            { !res.loading && 
                <span className="nav-btns">
                    <button onClick={() => setCurrentPageUrl(prevPageUrl)}>Prev</button>
                    <button onClick={() => setCurrentPageUrl(nextPageUrl)}>Next</button>
                </span>
            }
            { res.loading ? <h1>Loading...</h1> : display }
        </div>
    )
}
