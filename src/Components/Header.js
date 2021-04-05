import React from "react"


export default function Header({navs}){

    function handleFavorites(){
        console.log("clicked favorites")
    }

    return (
            <header>
                <h3>Pokemon Dex</h3>
                <button className="fav-header" onClick={handleFavorites}>Favorites</button>
            </header>
    )
}