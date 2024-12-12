import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// context
import APIContext from "../contexts/APIContext.jsx";
import DateFormatContext from "../contexts/DateFormatContext.jsx";

// stile
import style from "../components/MovieDetailsPage.module.css";

// icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

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
                                <strong>Genre:</strong> {movieDetails.genre}
                            </p>
                            <p>
                                <strong>Director:</strong> {movieDetails.director}
                            </p>
                            <p>
                                <strong>Release year:</strong> {movieDetails.release_year}
                            </p>
                            <p>
                                <strong>Abstract:</strong> {movieDetails.abstract}
                            </p>
                        </div>

                        {/* sezione reviews con map */}
                        <div className={style.cardBottom}>
                            <h2>
                                Reviews
                            </h2>
                            {movieDetails.reviews && movieDetails.reviews.length > 0 ? (
                                <ul>
                                    {movieDetails.reviews.map((review) => {
                                        const totalVote = review.vote; // variabile voto totale
                                        const emptyStars = 5 - totalVote; // variabile voto restante

                                        return (
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
                                                    <span><strong>Vote:</strong></span>

                                                    {/* stelle piene */}
                                                    {Array.from({ length: totalVote }).map((_, index) => (
                                                        <FontAwesomeIcon key={index} icon={faStarFull} className={style.starIcon} />
                                                    ))}

                                                    {/* stelle vuote */}
                                                    {Array.from({ length: emptyStars }).map((_, index) => (
                                                        <FontAwesomeIcon key={index} icon={faStarEmpty} className={style.starIcon} />
                                                    ))}
                                                </p>
                                                <p>
                                                    <strong>Updated at:</strong> {formatDate(review.updated_at)}
                                                </p>
                                            </li>
                                        )
                                    })}
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