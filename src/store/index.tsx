import { configureStore } from "@reduxjs/toolkit";

import showReducer from "./show/show";
import episodeReducer from "./episode/episode";

const store = configureStore({
  reducer: {
    show: showReducer,
    episode: episodeReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
