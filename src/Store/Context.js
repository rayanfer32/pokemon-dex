import React, { createContext, useEffect} from 'react';

const PokemonContext = createContext();


function Provider({children}){
    const [state, setState] = React.useState();
    const localFav = localStorage.getItem("fav")
    const [fav, setFav] = React.useState(
         localFav !== (null || "") ? JSON.parse(localFav) : [])
    
    const value = {state, fav, setFav, setState, function:()=>{}};

    useEffect(() => {
        localStorage.setItem("fav",JSON.stringify(fav))
        return () => {
            // cleanup
        }
    }, [fav])
    return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
}

export default Provider;
export {PokemonContext};