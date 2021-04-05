import React from "react"
import "./App.css";
import Header from "./Components/Header"
import PokemonList from "./Components/PokemonList"
import Provider from "./Store/Context";

const App = () => {
    return (
        <div>
            <Header />
            <Provider>
                 <PokemonList />
            </Provider>
        </div>
    )
}

export default App