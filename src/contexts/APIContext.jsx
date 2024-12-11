import { createContext, useState, useEffect } from "react";

// creazione context
const APIContext = createContext();

// componente provider
export const APIContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch tutti i iflm
    const [movieDetails, setMovieDetails] = useState(); // variabile per film id
    const url = import.meta.env.VITE_URL;

    // funzione fetch per tutti i film
    useEffect(() => {
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

    // funzione fetch per film per id
    const fetchFilmById = (id) => {
        fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovieDetails(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // rendi il provider
    return (
        <APIContext.Provider value={{ movies, movieDetails, fetchFilmById }}>
            {children}
        </APIContext.Provider>
    )
}

export default APIContext;