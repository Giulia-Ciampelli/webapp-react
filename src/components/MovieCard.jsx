import { useContext } from "react";

// context
import DateFormatContext from "../contexts/DateFormatContext.jsx";

export default function MovieCard({ movie }) {
    const { formatDate } = useContext(DateFormatContext); // variabile per formattazione data

    return (
        <div className="card">
            <p>
                <strong>Title:</strong> {movie.title}
            </p>
            <p>
                <strong>Director:</strong> {movie.director}
            </p>
            <p>
                <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
                <strong>Release year:</strong> {movie.release_year}
            </p>
            <p>
                <strong>Abstract:</strong> {movie.abstract}
            </p>
        </div>
    )
}