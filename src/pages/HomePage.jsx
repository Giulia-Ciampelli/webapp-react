import { NavLink } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="container">
                <h1>
                    Home
                </h1>
                <div className="button">
                    <NavLink to="/films">
                        Watch our movies!
                    </NavLink>
                </div>
            </div>
        </>
    )
}