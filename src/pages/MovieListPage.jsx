import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

// context
import APIContext from "../contexts/APIContext.jsx";

// componenti
import MovieCard from "../components/MovieCard.jsx";
import Loader from "../components/Loader.jsx";

export default function MovieListPage() {
    const { movies, loading } = useContext(APIContext); // variabile context

    // useEffect di test (non c'è log, il loader viene caricato dopo la movie card)
    useEffect(() => {
        console.log('Stato di caricamento:', loading);
    }, [loading])

    return (
        <>
            {loading ? <Loader /> :
                (<div className="container">
                    <h1>
                        All the movies
                    </h1>
                    <div className="row">
                        {movies.map((movie) => (
                            <Link to={`/films/${movie.id}`} key={movie.id}>
                                <MovieCard movie={movie} />
                            </Link>
                        ))}
                    </div>
                </div>)
            }
        </>
    )
}