import { Container } from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <Container>
        <img src={movie.ImagePath} />
        <div>
          <span>Title: </span>
          <span>{movie.Title}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.Director.Name}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.Genre.Name}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </Container>
    );
  };