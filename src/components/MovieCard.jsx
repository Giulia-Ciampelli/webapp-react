export default function MovieCard({ movie }) {

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