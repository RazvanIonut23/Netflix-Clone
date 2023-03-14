import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Carousel, { consts } from "react-elastic-carousel";
import s from "./Crew.module.css";
import user from "./images/user.jpg";
import { Button } from "semantic-ui-react";

function Crew() {
  const [crew, setCrew] = useState([]);
  const params = useParams();
  const breakPoints = [
    { width: 300, itemsToShow: 1, itemToScroll: 1 },
    { width: 400, itemsToShow: 2, itemToScroll: 1 },

    { width: 700, itemsToShow: 3, itemToScroll: 1 },
    { width: 900, itemsToShow: 4, itemToScroll: 1 },
    { width: 1300, itemsToShow: 5, itemToScroll: 1 },
    { width: 1700, itemsToShow: 8, itemToScroll: 1 },
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
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`
    )
      .then((response) => response.json())
      .then((data) =>
        setCrew(
          data.crew.slice(0, 10).map((item, index) => (
            <div className={s.crew} key={index}>
              {item.profile_path === null ? (
                <img src={user} className={s.userImg} alt="" />
              ) : (
                <img
                  className={s.crewImg}
                  alt="crew"
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                />
              )}
              <p className={s.name}>{item.name}</p>
              <p className={s.job}>{item.job}</p>
            </div>
          ))
        )
      );
  }, [params.id]);

  return (
    <div className={s.crewContainer}>
      <h2>Crew</h2>
      <Carousel
        breakPoints={breakPoints}
        showArrows={true}
        pagination={false}
        showEmptySlots={true}
        renderArrow={myArrow}
      >
        {crew}
      </Carousel>
    </div>
  );
}

export default Crew;
