import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Vikram",
  loader: true,
  error: null,
  bakeryUser: JSON.parse(localStorage.getItem('bakeryUser'))||{
    email: "",
    userId: "",
  },
};

const cakeSlice = createSlice({
  name: "cakeSlice",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = false;
    },

    setGoogleSignIn: (state, action) => {
      console.log("SetGoogleSignIn Activated from CakeSlice.jsx");
      state.loader = false;
      if (state.bakeryUser.email !== "") {
        localStorage.removeItem("bakeryUser");
        localStorage.setItem("bakeryUser", JSON.stringify(action.payload));
      } else {
        localStorage.setItem("bakeryUser", JSON.stringify(action.payload));
      }
      state.bakeryUser = JSON.parse(localStorage.getItem('bakeryUser'));
    },
    setLogIn: (state, action) => {
      console.log("setLogIn Activated from CakeSlice.jsx");
      state.loader = false;
      if (state.bakeryUser.email !== "") {
        localStorage.removeItem("bakeryUser");
        localStorage.setItem("bakeryUser", JSON.stringify(action.payload));
      } else {
        localStorage.setItem("bakeryUser", JSON.stringify(action.payload));
      }
      state.bakeryUser = JSON.parse(localStorage.getItem('bakeryUser'));
    },
  },
});

export const { setLoader, setGoogleSignIn, setLogIn } = cakeSlice.actions;
export default cakeSlice.reducer;
