import { createSlice } from "@reduxjs/toolkit";
interface Ilogin {
  name: string;
  email: string;
  photo: string;
}

const initialState: Ilogin = {
  name: "",
  email: "",
  photo: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserLogin(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOut(state) {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export default loginSlice;

export const loginAction = loginSlice.actions;
