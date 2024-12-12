import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// context
import APIContext from "../contexts/APIContext.jsx";
import DateFormatContext from "../contexts/DateFormatContext.jsx";

// stile
import style from "../components/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
    const { movieDetails, fetchFilmById } = useContext(APIContext); // variabile context
    const { id } = useParams(); // variabile params per mostrare solo la card corrispondente
    const { formatDate } = useContext(DateFormatContext); // variabile per formattazione data
    const navigate = useNavigate(); // variabile navigate

    useEffect(() => {
        if (!movieDetails || movieDetails.id !== id) {
            fetchFilmById(id);
        }
    }, [id])


    // ATTENZIONE: non rimuovere questa condizionale o quella su useEffect, se rimosse il componente funziona per circa un uso e poi smette di riconoscere movieDetails
    if (!movieDetails) {
        return <p>Loading movie details...</p>
    }

    return (
        <>
            <div className="container">
                <button onClick={() => navigate(-1)}>
                    Torna indietro
                </button>
                <h1>
                    {movieDetails.title}
                </h1>
                <div className="row">
                    <div className={style.card}>
                        <div className={style.cardTop}>
                            <p>
                                Title: {movieDetails.title}
                            </p>
                            <p>
                                Director: {movieDetails.director}
                            </p>
                            <p>
                                Genre: {movieDetails.genre}
                            </p>
                            <p>
                                Release year: {movieDetails.release_year}
                            </p>
                            <p>
                                Abstract: {movieDetails.abstract}
                            </p>
                            <p>
                                Created at: {formatDate(movieDetails.created_at)}
                            </p>
                            <p>
                                Updated at: {formatDate(movieDetails.updated_at)}
                            </p>
                        </div>

                        {/* sezione reviews con map */}
                        <div className={style.cardBottom}>
                            <h2>
                                Reviews
                            </h2>
                            {movieDetails.reviews && movieDetails.reviews.length > 0 ? (
                                <ul>
                                    {movieDetails.reviews.map((review) => (
                                        <li key={review.id}>
                                            <p>
                                                <strong>
                                                    {review.name} says:
                                                </strong>
                                            </p>
                                            <p>
                                                {review.text}
                                            </p>
                                            <p>
                                                Vote: <strong>{review.vote}</strong>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No reviews yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}