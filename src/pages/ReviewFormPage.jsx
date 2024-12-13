import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

export default function ReviewFormPage() {
    const [username, setUsername] = useState(''); // RICORDA: le stringhe vuote in campi form evitano il warning dopo, perchè devono cambiare!
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();
    const { movieId } = useParams();

    // funzione per la validazione dati
    const HandleValidation = () => {
        if (!username || !comment || rating == 0) {
            setError('Please fill out all the fields!');
            return false;
        }
        setError(null);
        return true;
    }

    // funzione per il setSuccess
    const HandleSuccess = (data) => {
        if (data.success) {
            setSuccess('Grazie per la tua recensione! Verrai reindirizzato alla pagina precedente')

            // timer
            setTimeout(() => {
                setSuccess(null);
                navigate(-1);
            }, 5000);
        }
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
        fetch(`http://localhost:3000/films/reviews/${movieId}`, {
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


    return (
        <div className="container">
            <div className="row">
                <form onSubmit={HandleSubmit} className="card">

                    {/* campo username */}
                    <input name="user" type="text" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} />

                    {/* campo commento */}
                    <textarea name="comment" id="comment" placeholder="Your comment" value={comment} onChange={(e) => setComment(e.target.value)}>
                    </textarea>

                    {/* campo voto */}
                    {[1, 2, 3, 4, 5].map(star => <span key={star} className="stellinaPienaVuota">
                        <FontAwesomeIcon icon={star <= rating ? faStarFull : faStarEmpty} onClick={() => setRating(star)} /></span>)}

                    <div className="error">
                        <button type="submit" className="button">
                            Send
                        </button>
                        {error && <span>{error}</span>}
                    </div>
                </form>
            </div>
        </div>
    )
}