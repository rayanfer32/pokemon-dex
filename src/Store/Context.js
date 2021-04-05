import React, { createContext } from 'react';

const PokemonContext = createContext();


function Provider({children}){
    const [state, setState] = React.useState();
    const [fav, setFav] = React.useState([])
    
    const value = {state, fav, setFav, setState, function:()=>{}};

    return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
}

export default Provider;
export {PokemonContext};