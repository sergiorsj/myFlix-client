import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
      // {
      //   id: 1,
      //   Title: 'Shutter Island',
      //   Director: 'Martin Scorsese',
      //   Genre:'Suspense-Thriller',
      //   ImageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg'
      // },
      // {
      //   id: 2,
      //   Title: 'The Fugitive',
      //   Director: 'Andrew Davis',
      //   Genre: 'Suspense-Thriller',
      //   ImageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/The_Fugitive_official_logo.png/250px-The_Fugitive_official_logo.png'
      // },
      // {
      //   id: 3,
      //   Title: 'The Shack',
      //   Director: 'Stuart Hazeldine',
      //   Genre: 'Feel-Good',
      //   ImageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Shackover.jpg'
      // },
  ]);

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjU1MjQ1OWM4ZjA4YTEzNGMyOWM4ZWMiLCJVc2VybmFtZSI6ImpvaG5kb2UxMTExMiIsIlBhc3N3b3JkIjoicGFzc3cwcmQiLCJFbWFpbCI6ImpvaG5kb2UxMjEyQGVtYWlsLmNvbSIsIkZhdm9yaXRlTW92aWVzIjpbXSwiX192IjowLCJpYXQiOjE3MTY4NTU5MTMsImV4cCI6MTcxNzQ2MDcxMywic3ViIjoiam9obmRvZTExMTEyIn0.KRO5lFanhnPjs7E2h55S0bV_RTseuJq313rJPkWfMHw";
    fetch("https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/movies", {
      headers:{
        Authorizantion:"Bearer " + token
      }
    })
    .then(response=>response.json())
    .then(movies=>{console.log(movies)
      setMovies(movies)})
    .catch(e=>console.log(e))
  } )

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={() => {
            setSelectedMovie(movie);
          }}
        />
      ))}
    </div>
  );
};