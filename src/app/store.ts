import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieslice";
import loginSlice from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    login: loginSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
