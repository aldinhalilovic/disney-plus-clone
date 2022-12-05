import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { movieAction } from "../features/movie/movieslice";
import { db, getCities } from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies);

  useEffect(() => {
    void getCities(db).then((res) => dispatch(movieAction.addMovies(res)));
  }, []);
  console.log(movies);

  return (
    <Container>
      <div
        style={{
          width: "90vw",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* {movie?.map((img: any) => (
          <img src={img.titleImg} key={img.title} />
        ))} */}
      </div>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &::before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
