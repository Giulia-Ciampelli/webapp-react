// import { Link } from "react-router-dom";
import { useContext } from "react";

// context
import APIContext from "../contexts/APIContext.jsx";

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
                            <div className="card" key={movie.id}>
                                <p>
                                    Title: {movie.title}
                                </p>
                                <p>
                                    Director: {movie.director}
                                </p>
                                <p>
                                    Genre: {movie.genre}
                                </p>
                                <p>
                                    Release year: {movie.release_year}
                                </p>
                                <p>
                                    Abstract: {movie.abstract}
                                </p>
                                <p>
                                    Created at: {movie.created_at}
                                </p>
                                <p>
                                    Updated at: {movie.updated_at}
                                </p>
                            </div>
                        ))
                        )}
                    {/* <Link to={`/films/${id}`}>
                        Single Movie
                    </Link> */}
                </div>
            </div>
        </>
    )
}