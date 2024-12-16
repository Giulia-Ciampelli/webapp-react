import { Link } from "react-router-dom";
import { useContext } from "react";

// context
import APIContext from "../contexts/APIContext.jsx";

// componenti
import Loader from "../components/Loader.jsx";
import MovieCard from "../components/MovieCard.jsx";

export default function MovieListPage() {
    const { movies, loading } = useContext(APIContext); // variabile context

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