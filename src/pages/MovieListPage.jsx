import { Link } from "react-router-dom";
import { useContext } from "react";

// context
import APIContext from "../contexts/APIContext.jsx";

// componenti
import MovieCard from "../components/MovieCard.jsx";

export default function MovieListPage() {
    const { movies } = useContext(APIContext); // variabile context

    return (
        <>
            <div className="container">
                <h1>
                    All the movies
                </h1>
                <div className="row">

                    {/* RICORDA: sistema il parametro prima di sclerare, ovviamente ora non funziona */}
                    {movies.length === 0 ? (<p>Nessun film</p>) :
                        (movies.map((movie) => (
                            <Link to={`/films/${movie.id}`} key={movie.id}>
                                <MovieCard movie={movie} />
                            </Link>
                        ))
                        )}
                </div>
            </div>
        </>
    )
}