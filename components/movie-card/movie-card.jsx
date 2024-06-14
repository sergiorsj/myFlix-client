import PropType from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie }) => {
   console.log(movie);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const addFav = () => {
    fetch(`https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/users/${movie._id}/${user.Username}`, {
      "method": "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
            }
    })
          .then((response) => response.json())
          .then(updatedUser=>
            {
            alert("Movie added")
            localStorage.setItem("user", JSON.stringify(updatedUser));
            location.href = "/profile";
            })
          .catch(e=>console.log(e))
  }
  const removeFav = () => {
    fetch(`https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/users/${movie._id}/${user.Username}`, {
      "method": "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
            }
    })
          .then((response) => response.json())
        .then(updatedUser=>
            {
            alert("Movie removed")
            localStorage.setItem("user", JSON.stringify(updatedUser));
            location.href = "/profile";
            })
          .catch(e=>console.log(e))
  }
  console.log(movie)
    return (
      // <Card
 
      //   {movie.Title}
      // </Card>
      <div className="card" style={{ width: 300 }}>
      <img className="card-img-top" src= {movie.ImagePath} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Description}</p>
        <Link className="primary" to={`/movies/${movie._id}`}>Open Movie</Link> {" "}
 <Button onClick={addFav}>
          Add to Favorites
        </Button>
        <Button onClick={removeFav}>
          Remove from Favorites
        </Button>
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