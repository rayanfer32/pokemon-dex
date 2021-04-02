import React from 'react'
import { useAxiosGet } from '../Hooks/ApiCall'

export default function PokeCard({pokemon}) {

    let pokemonDetails = useAxiosGet(pokemon.url)    

    let pokeCardDisplay = null

    if(pokemonDetails.loading){
        return <h1>Loading</h1>
    }

    if(pokemonDetails.error){
        return <h1>Error in retrieving data</h1>
    }

    if(pokemonDetails.data !== null){
        pokeCardDisplay = 
        <div className="pokecard">
            <img src={pokemonDetails.data.sprites.other.dream_world.front_default} alt="pokemon pic"></img>
            <h1>{pokemon.name}</h1>
        </div>
    }

    return (
        pokeCardDisplay
    )
}
