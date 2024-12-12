import { useContext } from "react";

// context
import DateFormatContext from "../contexts/DateFormatContext.jsx";

export default function MovieCard({ movie }) {
    const { formatDate } = useContext(DateFormatContext); // variabile per formattazione data

    return (
        <div className="card">
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
                Created at: {formatDate(movie.created_at)}
            </p>
            <p>
                Updated at: {formatDate(movie.updated_at)}
            </p>
        </div>
    )
}