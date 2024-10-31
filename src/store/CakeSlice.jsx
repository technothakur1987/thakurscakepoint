import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Vikram",
  loader: true,
};

const cakeSlice = createSlice({
  name: "cakeSlice",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = false;
    },
  },
});

export const { setLoader } = cakeSlice.actions;
export default cakeSlice.reducer;
