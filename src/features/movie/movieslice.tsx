import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../model/model";

interface MovieCards {
  movies: IMovie[];
}

const initialState: MovieCards = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const movieAction = movieSlice.actions;

export default movieSlice;
