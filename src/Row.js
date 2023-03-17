import axios from "./axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Row.module.css";
import Carousel, { consts } from "react-elastic-carousel";
import { Button, Icon } from "semantic-ui-react";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleCkick = (movie) => {
    return () => {
      navigate(`/movie/${movie.id}`);
    };
  };

  const base_url = "https://image.tmdb.org/t/p/original/";

  const breakPoints = [
    { width: 100, itemsToShow: 1, itemToScroll: 1 },
    { width: 200, itemsToShow: 2, itemToScroll: 2 },
    { width: 550, itemsToShow: 3, itemToScroll: 3 },
    { width: 700, itemsToShow: 4, itemToScroll: 4 },
    { width: 900, itemsToShow: 5, itemToScroll: 5 },
    { width: 1100, itemsToShow: 6, itemToScroll: 6 },
    { width: 1300, itemsToShow: 7, itemToScroll: 7 },
    { width: 1500, itemsToShow: 7.5, itemToScroll: 7.5 },
    { width: 1650, itemsToShow: 9, itemToScroll: 9 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? "<" : " >";
    return (
      <Button onClick={onClick} disabled={isEdge} className={s.arrow}>
        {pointer}
      </Button>
    );
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={s.row}>
      <h2>{title}</h2>
      <div className={s.rowPosters}>
        <Carousel
          renderArrow={myArrow}
          showArrows={true}
          pagination={false}
          itemsToShow={7.5}
          breakPoints={breakPoints}
        >
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  onClick={handleCkick(movie)}
                  className={`${s.rowPoster} ${isLargeRow && s.rowPosterLarge}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Row;
