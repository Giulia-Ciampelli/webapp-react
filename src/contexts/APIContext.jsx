import { createContext, useState, useEffect } from "react";

// creazione context
const APIContext = createContext();

// componente provider
export const APIContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]); // variabile fetch tutti i film
    const [movieDetails, setMovieDetails] = useState(); // variabile per film id
    const url = import.meta.env.VITE_URL;
    const [loading, setLoading] = useState(false);

    // fetch per tutti i film
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.movies);
                setMovies(data.movies);
                setLoading(false); // smetti di caricare come trova i dati
            })
            .catch(err => {
                console.log(err);
                setLoading(false); // smetti di caricare come trova un errore
            })
    }, [])

    // fetch per film per id
    const fetchFilmById = (id) => {
        fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovieDetails(data);
                setLoading(false); // smetti di caricare come trova i dati
            })
            .catch(err => {
                console.log(err);
                setLoading(false); // smetti di caricare come trova un errore
            })
    }

    // rendi il provider
    return (
        <APIContext.Provider value={{ movies, movieDetails, fetchFilmById, loading }}>
            {children}
        </APIContext.Provider>
    )
}

export default APIContext;