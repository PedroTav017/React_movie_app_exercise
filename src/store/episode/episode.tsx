import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  summary: "",
  image: { medium: "", original: "" },
  number: "",
};

const episodeSlice = createSlice({
  name: "episode",
  initialState: initialState,
  reducers: {
    changeEpisode: (state, action) => action.payload,
  },
});

export const episodeActions = episodeSlice.actions;

export default episodeSlice.reducer;
