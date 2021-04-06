import React from "react"
import usePokemon from "../Hooks/usePokemon"


export default function Header({navs}){

    const userData = usePokemon()

    function handleFavorites(){
    
        userData.setState(
            {...userData.state,'showFavorites': !userData.state.showFavorites}
        )
        
        // console.log(userData.state)

    }

    return (
            <header>
                <h3>Pokemon Dex</h3>
                <button  className="fav-header" style={userData.state.showFavorites? { background:"#35b" , boxShadow:"-1px -1px 1px #222"} : { background:"#47f"} } onClick={handleFavorites}>Favorites</button>
            </header>
    )
}