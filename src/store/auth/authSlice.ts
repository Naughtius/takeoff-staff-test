import { ValuesAuthType } from "@main-types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  isAuth: boolean;
};

const initialState: State = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authFetch: (state, payload: PayloadAction<ValuesAuthType>) => {},
    authSuccess: (state) => {
      return { ...state, isAuth: true };
    },
  },
});

export const { authFetch, authSuccess } = authSlice.actions;

export default authSlice.reducer;
