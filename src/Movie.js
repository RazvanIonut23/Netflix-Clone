import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./axios";
import { API_KEY } from "./Requests";
import s from "./Movie.module.css";
import Nav from "./Nav";
import { Button, Modal, ModalContent } from "semantic-ui-react";
import Crew from "./Crew";

const Movie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const img_url = "https://image.tmdb.org/t/p/original/";
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState("");
  const [credit, setCredit] = useState([]);
  const [open, setOpen] = React.useState(false);
  let directing = "";

  useEffect(() => {
    if (params.id) {
      fetchMovie();
    }
  }, [params.id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`
    )
      .then((response) => response.json())
      .then((data) =>
        setVideo(
          data.results
            .filter((item) => item.type.toLowerCase() === "trailer")
            .map((item) => item.key)[0]
        )
      );
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setCredit(data);
        console.log(data);
      });
  }, [params.id]);

  async function fetchMovie() {
    setLoading(true);
    const response = await axios.get(`movie/${params.id}?api_key=${API_KEY}`);
    setMovie(response.data);
    setLoading(false);
  }

  if (Object.values(credit).length > 0) {
    directing = credit.crew
      .filter((item) => item.job === "Director")
      .map((item) => item.name);
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={s.movie}>
      <Nav />
      <div
        className={s.banner}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url("${img_url}${movie.backdrop_path}")`,
        }}
      >
        <img
          onClick={() => setOpen(false)}
          className={s.movieImg}
          src={`${img_url}${movie.poster_path}`}
          alt={movie.original_title}
          style={{ width: "200px", height: "200px" }}
        />
        <div className={s.movieInfo}>
          <h1>
            {movie.original_title} ({movie.release_date})
          </h1>
          <Modal
            className={s.movieModal}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            onClick={() => setOpen(false)}
            trigger={<Button className={s.modalButton}>Trailer</Button>}
          >
            <iframe
              className={s.movieTrailer}
              title={movie.name || movie.title}
              src={`https://www.youtube.com/embed/${video}`}
            />
          </Modal>

          <p>Directed By: {directing}</p>
          <p>{movie.runtime} m</p>
          <p>{movie.overview}</p>
        </div>
      </div>
      <Crew />
    </div>
  );
};

export default Movie;
