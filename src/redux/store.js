import { configureStore } from "@reduxjs/toolkit";
// We can import out shazamCoreAPI from services
import { shazamCoreApi } from "./services/shazamCore";

// This is the for the music player
import playerReducer from "./features/playerSlice";

// Redux boiler blate code
export const store = configureStore({
  reducer: {
    // set the reducer path
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  // Specify the default middleware to use, add reducers of all middleware we using
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
