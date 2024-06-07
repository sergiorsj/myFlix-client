import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

export const MovieView = ({ movies, onBackClick }) => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState({})
  useEffect(() => {
     setMovie(movies.find(x=>x._id === movieId))
  }, [movies, movieId, movie])
  console.log(movieId, movie)
  if (!movie) return <>Loading...</>
  else
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
        <div>
          <span>Description: </span>
          <span>{movie.Description}</span>
        </div>
        <div>
          <span>Actors: </span>
          <span>{JSON.stringify(movie.Actors)}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </Container>
    );
  };