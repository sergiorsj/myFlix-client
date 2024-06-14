import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignUpView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

const NavBar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-between", listStyle: "none" }}>
        {!localStorage.getItem("user") ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export const MainView = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/movies")
      .then(response => response.json())
      .then(movies => setMovies(movies))
      .catch(e => console.log(e));
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Row>
          <Routes>
            <Route
              path="/signup"
              element={<SignUpView />}
            />
            <Route
              path="/login"
              element={<LoginView onLoggedIn={(user) => setUser(user)} />}
            />
            <Route
              path="/"
              element={
                <>
                  {movies.map((movie) => (
                    <Col className="mb-4" key={movie._id} md={3}>
                      <MovieCard movie={movie} />
                    </Col>
                  ))}
                </>
              }
            />
            <Route
              path="/movies/:movieId"
              element={<MovieView movies={movies} />}
            />
            <Route
              path="/profile"
              element={
                <Col md={8}>
                  <ProfileView movies={movies} />
                </Col>
              }
            />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
