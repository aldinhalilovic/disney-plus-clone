import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getMovie } from "../features/firebase/getMovie";
import { movieAction } from "../app/slices/movieslice";
import { Modal } from "@mantine/core";
import { loginAction } from "../app/slices/loginSlice";

const Detail = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movies.movie);
  const iframeTrailer = movie?.trailer;

  useEffect(() => {
    void getMovie(id).then((res) => dispatch(movieAction.addMovie(res)));
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
      {movie.id !== "" ? (
        <>
          <Background>
            <img src={movie?.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie?.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton onClick={() => setOpened(true)}>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie?.subTitle}</SubTitle>
          <Description>{movie?.description}</Description>
          <Modal
            centered
            opened={opened}
            onClose={() => setOpened(false)}
            size="auto"
            overlayColor="black"
            overlayBlur={4}
            withCloseButton={false}
            padding={0}
          >
            <iframe
              height={400}
              width={680}
              src={`https://www.youtube.com/embed/${iframeTrailer}`}
              style={{
                border: "none",
              }}
            ></iframe>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: rgb(249, 249, 249);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  max-width: 760px;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
