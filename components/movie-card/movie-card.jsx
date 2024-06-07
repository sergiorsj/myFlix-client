import PropType from "prop-types";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  console.log(movie)
    return (
      // <Card
 
      //   {movie.Title}
      // </Card>
      <div className="card" style={{ width: 400 }}>
      <img className="card-img-top" src= {movie.ImagePath} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Description}</p>
        <Link className="primary" to={`/movies/${movie._id}`}>Open Movie</Link>
  
      </div>
    </div>
    );
  };

  MovieCard.propTypes = {
    movie: PropType.shape({
      Title: PropType.string.isRequired,
      ImagePath: PropType.string.isRequired, 
    }).isRequired
  };