export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <img src={movie.ImageUrl} />
        <div>
          <span>Title: </span>
          <span>{movie.Title}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.Director}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.Genre}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };