import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// context
import APIContext from "../contexts/APIContext.jsx";

// stile
import style from "../components/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
    const { movieDetails, fetchFilmById } = useContext(APIContext); // variabile context
    const { id } = useParams(); // variabile params per mostrare solo la card corrispondente

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
                <h1>
                    Single movie with its reviews
                </h1>
                <div className="row">
                    <div className="card">
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
                                Created at: {movieDetails.created_at}
                            </p>
                            <p>
                                Updated at: {movieDetails.updated_at}
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
                                                {review.name} says:
                                            </p>
                                            <p>
                                                {review.text}
                                            </p>
                                            <p>
                                                Vote: {review.vote}
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
            </div>
        </>
    )
}