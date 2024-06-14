import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { SignUpView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


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


  // if (!user) {
  //   return <Container><h1>Log in</h1>
  //     <LoginView onLoggedIn={(user) => setUser(user)} />
  //   <br/> Or <br/>
  //   <h1>Sign Up</h1>
  //   <SignUpView/>
  //   </Container>;
  // }

  // if (selectedMovie) {
  //   return (
  //     <div>
  //     <button
  //         onClick={() => {
  //           setUser(null);
  //         }}
  //       >
  //         Logout
  //       </button>
  //     <MovieView
  //       movie={selectedMovie}
  //       onBackClick={() => setSelectedMovie(null)}
  //     /></div>
  //   );
  // }
  // if (movies.length === 0) {
  //   return <div>
  //   <button
  //       onClick={() => {
  //         setUser(null);
  //       }}
  //     >
  //       Logout
  //     </button>
  //     The list is empty!</div>;
  // }

  return (
    <BrowserRouter>
    <Row>
    <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignUpView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={(user) => setUser(user)} />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col className="mb-4" key={movie._id} md={3}>
                        <MovieCard movie={movie} />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />

<Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                  <Col md={8}>
                    <ProfileView movies={movies} />
                  </Col>
              </>
            }
          />

      {/* <button
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
      ))} */}
      </Routes>
    </Row>
    </BrowserRouter>
  );
};