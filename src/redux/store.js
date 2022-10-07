import { configureStore } from "@reduxjs/toolkit";

// This is the for the music player
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
