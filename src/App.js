import React from "react"
import "./App.css";
import Header from "./Components/Header"
import PokemonList from "./Components/PokemonList"

const App = () => {
    return (
        <div>
            <Header />
            <PokemonList />
        </div>
    )
}

export default App