import PropType from "prop-types";
import { Card, Col } from "react-bootstrap";
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <Card>
        onClick={() => {
          onMovieClick(movie);
        }}
        {movie.Title}
      </Card>
    );
  };

  MovieCard.propTypes = {
    movie: PropType.shape({
      Title: PropType.string.isRequired,
      ImagePath: PropType.string.isRequired, 
    }).isRequired
  };