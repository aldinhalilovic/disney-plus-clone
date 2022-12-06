import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../model/model";

interface MovieCards {
  movies: IMovie[];
  movie: IMovie;
}

const initialState: MovieCards = {
  movies: [],
  movie: {
    id: "",
    backgroundImg: "",
    cardImg: "",
    description: "",
    subTitle: "",
    title: "",
    titleImg: "",
  },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    addMovie(state, action) {
      state.movie = action.payload;
    },
    resetMovie(state) {
      state.movie = {
        id: "",
        backgroundImg: "",
        cardImg: "",
        description: "",
        subTitle: "",
        title: "",
        titleImg: "",
      };
    },
  },
});

export const movieAction = movieSlice.actions;

export default movieSlice;
