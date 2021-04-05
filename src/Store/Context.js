import React, { createContext, useEffect, useState} from 'react';

const PokemonContext = createContext();


function Provider({children}){
    const [state, setState] = React.useState(
        {
            showFavorites: false,
        }
    );
    
    const localFav = localStorage.getItem("fav")
    console.log(localFav)
    const [fav, setFav] = React.useState(localFav === null ? [] : JSON.parse(localFav))

    const value = {state, fav, setFav, setState};

    useEffect(() => {
        localStorage.setItem("fav",JSON.stringify(fav))
        return () => {
            // cleanup
        }
    }, [fav])
    
    return(
        <PokemonContext.Provider 
        value={value}>
            {children}
        </PokemonContext.Provider>
    )
}

export default Provider;
export {PokemonContext};