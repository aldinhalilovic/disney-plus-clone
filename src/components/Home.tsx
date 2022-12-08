import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
import { loginAction } from "../app/slices/loginSlice";
import { movieAction } from "../app/slices/movieslice";
import { getMovies } from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void getMovies().then((res) => dispatch(movieAction.addMovies(res)));
    dispatch(movieAction.resetMovie());
  }, []);

  useEffect(() => {
    dispatch(
      loginAction.setUserLogin({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        photo: localStorage.getItem("photo"),
      }),
    );
  }, []);

  return (
    <Container>
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
