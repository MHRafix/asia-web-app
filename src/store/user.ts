import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  user: any | null;
  access_token: string | null;
}

const initialState: UserState = {
  user: null,
  access_token: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setAccessToken: (state, action) => {
      state.access_token = action.payload;
    },
    removeAccessToken: (state) => {
      state.access_token = null;
    },
  },
});

export const { setUser, removeUser, setAccessToken, removeAccessToken } =
  counterSlice.actions;
export default counterSlice.reducer;
