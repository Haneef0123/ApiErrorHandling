import { createSlice } from "@reduxjs/toolkit";
const apiSlice = createSlice({
  name: "api",
  initialState: { errorStatus: "" },
  reducers: {
    setErrorStatus(state, action) {
      state.errorStatus = action.payload;
    },
  },
});

export const apiActions = apiSlice.actions;
export default apiSlice;
