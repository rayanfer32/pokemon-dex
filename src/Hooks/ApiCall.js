import axios from "axios"
import { useState, useEffect } from "react"

export function useAxiosGet(url) {
    const [response, setResponse] = useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect( () => {
        setResponse({
            loading: true,
            data: null,
            error: false,
        })

        axios.get(url).then(response =>
            setResponse({
                loading: false,
                data: response.data,
                error: false,
            }) 
        ).catch(error => 
            setResponse(
                {
                    loading: false,
                    data: null,
                    error: true,
                }
            )
        )
    },[url])
    
    return response
}
