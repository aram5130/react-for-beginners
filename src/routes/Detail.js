
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (<h2>Detail</h2>) : (<div>
        {movie ?
          <div>
            <img src={movie.large_cover_image} alt="titleImg" />
            <h2>{movie.title}</h2>
            <h6>{movie.year}</h6>
            <ul>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <p>{movie.description_intro}</p>

          </div>
          : null}

      </div>)}
    </div>
  )
}
export default Detail;