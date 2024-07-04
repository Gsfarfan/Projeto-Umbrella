import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa";
import "./Navbar.css";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true}) => {
    return (
    <div className="movie-card" id="c2">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h4>{movie.title}</h4>
        <p>
        <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}><h5>Detalhes</h5></Link>}
    </div>
    );
};
export default MovieCard;