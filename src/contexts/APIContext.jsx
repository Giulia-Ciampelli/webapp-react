import { createContext, useState, useEffect } from "react";

// creazione context
const APIContext = createContext();

// componente provider
export const APIContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch
    const url = import.meta.env.VITE_URL;

    useEffect(() => {

        // funzione fetch
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.movies);
                setMovies(data.movies);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // rendi il provider
    return (
        <APIContext.Provider value={{ movies }}>
            {children}
        </APIContext.Provider>
    )
}

export default APIContext;