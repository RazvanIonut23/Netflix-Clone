import axios from "./axios";
import React, { useEffect, useState } from "react";
import s from "./Banner.module.css";
import requests from "./Requests";
import { Link } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      setLoading(false);
      return request;
    }
    fetchData();
  }, []);

  console.log("movie", movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  if (loading || !movie.id) {
    return <p>Loading...</p>;
  }

  return (
    <header
      className={s.banner}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className={s.bannerContents}>
        <h1 className={s.bannerTitle}>
          {movie?.title || movie?.name || movie?.original}
        </h1>
        <div className={s.bannerButtons}>
          <Link to={`/movie/${movie.id}`}>
            <button className={s.bannerButton}>Play</button>
          </Link>
        </div>
        <h1 className={s.bannerDescription}>
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className={s.bannerfadeBottom} />
    </header>
  );
};

export default Banner;
