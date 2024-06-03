import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import Row from "react-bootstrap/Row";

export const MainView = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/movies"
    )
    .then(response=>response.json())
    .then(movies=>{
      setMovies(movies)})
    .catch(e=>console.log(e))
  } )


  if (!user) {
    return <LoginView onLoggedIn={(user) => setUser(user)} />;
  }

  if (selectedMovie) {
    return (
      <div>
      <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      /></div>
    );
  }
  if (movies.length === 0) {
    return <div>
    <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
      The list is empty!</div>;
  }

  return (
    <Row>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
      {movies.map((movie) => (
        <Col><MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={() => {
            setSelectedMovie(movie);
          }}
        /></Col>
      ))}
    </Row>
  );
};