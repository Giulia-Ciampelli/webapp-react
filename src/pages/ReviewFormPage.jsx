import { useState } from "react";

// icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons"; // stella piena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // stella vuota

export default function ReviewFormPage() {
    const [username, setUsername] = useState();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState();
    const [error, setError] = useState(null);

    function HandleSubmit(e) {
        e.preventDefault();

        // validazione dati
        if (!username || !comment || rating == 0) {
            setError('Please fill out all the fields!');
        }
        else {
            const formData = {
                name: username,
                text: comment,
                vote: rating
            }

            console.log(formData);

            // mandalo all'id del film corretto
        }

        // messaggio di successo

        // timer?

        // navigate - 1
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