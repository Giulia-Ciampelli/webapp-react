import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

// icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

// stile
import style from '../components/ReviewFormPage.module.css';

// componenti
import Loader from "../components/Loader.jsx";
import APIContext from "../contexts/APIContext.jsx";

export default function ReviewFormPage() {
    const [username, setUsername] = useState(''); // RICORDA: le stringhe vuote in campi form evitano il warning dopo, perchè devono cambiare!
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const { movieId } = useParams();
    const url = import.meta.env.VITE_URL;
    const { loading } = useContext(APIContext); // variabile di caricamento

    // funzione per la validazione dati
    const HandleValidation = () => {
        if (!username || !comment || rating == 0) {
            setError('Please fill out all the fields!');
            return false;
        }
        setError(null);
        return true;
    }

    // funzione per submit form
    function HandleSubmit(e) {
        e.preventDefault();

        // validazione dati
        if (!HandleValidation()) return;

        // preparazione dati
        const formData = {
            name: username,
            text: comment,
            vote: rating
        }

        console.log(formData);

        // funzione fetch
        fetch(`${url}/reviews/${movieId}`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then(HandleSuccess) // richiamo funzione setSuccess
            .catch((err) => console.log(err))
    }

    // funzione per il setSuccess
    const HandleSuccess = (data) => {
        if (data.success) {
            setSuccess('Thank you for your review! You\'ll be sent to the previous page in a couple of seconds.')
        }
    }

    // useEffect per messaggio di successo
    useEffect(() => {
        if (success) {

            // timer
            setTimeout(() => {
                setSuccess(null);
                navigate(-1);
            }, 3000);
        }
    }, [success, navigate])

    return (
        <>
            {loading ? <Loader /> : (
                <div className="container">
                    <h1>
                        Leaver your review
                    </h1>
                    <div className="row">
                        <form onSubmit={HandleSubmit} className={style.card}>

                            {/* campo username */}
                            <div className={style.user}>
                                <label htmlFor="user">
                                    Insert your username here
                                </label>
                                <input name="user" id="user" type="text" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            {/* campo commento */}
                            <div className={style.comment}>
                                <label htmlFor="comment">
                                    Insert your comment here
                                </label>
                                <textarea name="comment" id="comment" placeholder="Your comment" value={comment} onChange={(e) => setComment(e.target.value)}>
                                </textarea>
                            </div>

                            {/* campo voto */}
                            <div className={style.vote}>
                                <span>
                                    Insert your vote <br />
                                </span>
                                {[1, 2, 3, 4, 5].map(star => <span key={star} className="stellinaPienaVuota">
                                    <FontAwesomeIcon icon={star <= rating ? faStarFull : faStarEmpty} onClick={() => setRating(star)} />
                                </span>)}
                            </div>

                            {/* sezione bottone e messaggio errore */}
                            <div className={style.error}>
                                <button type="submit" className="button">
                                    Send
                                </button>
                                {error && <span>{error}</span>}
                            </div>

                            {/* sezione messaggio successo */}
                            <div className={style.success}>
                                {success && <span>{success}</span>}
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}