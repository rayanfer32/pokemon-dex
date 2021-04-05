import React from "react"
import usePokemon from "../Hooks/usePokemon"


export default function Header({navs}){

    const userData = usePokemon()

    function handleFavorites(){
    
        userData.setState(
            {...userData.state,'showFavorites': !userData.state.showFavorites}
        )
        console.log(userData.state)

    }

    return (
            <header>
                <h3>Pokemon Dex</h3>
                <button className="fav-header" onClick={handleFavorites}>Favorites</button>
            </header>
    )
}