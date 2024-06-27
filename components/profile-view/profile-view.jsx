import{ useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({movies}) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const fav =  movies.filter((movie) => {
    return localUser.FavoriteMovies.includes(movie._id);
  });
  
  const [username, setUsername] = useState(localUser.Username||"");
  const [password, setPassword] = useState(localUser.Password||"");
  const [email, setEmail] = useState(localUser.Email||"");
  const [birthday, setBirthday] = useState(localUser.Birthday||"01/01/0001");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/users/"+user._id, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };
console.log(fav);
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername">
      <Form.Label>
        Username:
      </Form.Label>
      <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength='4'
        /> 
    </Form.Group>
    <Form.Group controlId="formPassword">
      <Form.Label>
        Password:
      </Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
    </Form.Group>
    <Form.Group controlId="formEmail">
    <Form.Label>
        Email:
    </Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
    </Form.Group>
    <Form.Group controlId="formBdate">
    <Form.Label>
        Birthday:
    </Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
    </Form.Group>
    <h1>Fav Movies</h1>
      <Button variant="primary" type="submit">Edit Profile</Button>
      {
       localUser && fav.map((movie) => (
        <MovieCard movie={movie}>
        </MovieCard>
    // <Card>
    //     <Card.Img variant="top" src={movie.ImagePath}/>
    //     <Card.Body>
    //     <Card.Title>{movie.Title}</Card.Title>
    //     <Card.Text>{movie.Director.Name}</Card.Text>
    //     <Link to = {`/movies/${movie._id}`}>
    //       Open
    //     </Link>
    //     </Card.Body>
    //   </Card>
        ))}
    </Form>
  );
};