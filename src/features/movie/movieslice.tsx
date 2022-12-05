import { createSlice } from "@reduxjs/toolkit";
import { iMovie } from "../../model/model";

interface MovieCards {
  movies: iMovie[];
}

const initialState: MovieCards = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies.push(action.payload);
    },
  },
});

export const movieAction = movieSlice.actions;

export default movieSlice;
