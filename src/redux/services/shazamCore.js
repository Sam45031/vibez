// Main file in which we gonna make API calls
// Imports coming from Redux toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  // An api needs to have a reducer path, just a name is good
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "9bf5449224msh4f1129d745956dfp12fe2ajsn1456904767cf"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // "/charts/world" --> from the API. We don't have to put the entire URL everytime
    // querry is a func so make sure to put arrows
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

// redux allows us to use 'getTopCharts' as a hook
export const { useGetTopChartsQuery } = shazamCoreApi;
