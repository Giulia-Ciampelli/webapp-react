import { Link } from "react-router-dom"; // link o navlink in questo caso?

export default function MovieListPage() {
    return (
        <>
            <h1>
                All the movies
            </h1>

            {/* RICRDOA: sistema il parametro prima di sclerare, ovviamente ora non funziona */}
            <Link to={`/films/${id}`}>
                Single Movie
            </Link>
        </>
    )
}