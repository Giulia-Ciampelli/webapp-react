export default function MovieCard({ movie }) {
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
                Created at: {movie.created_at}
            </p>
            <p>
                Updated at: {movie.updated_at}
            </p>
        </div>
    )
}