import { apiSlice } from "./apiSlice";

// TODO: dodac ściąganie pogody

const weatherSlice = apiSlice.enhanceEndpoints({ addTagTypes: ["Weather"] });

const _weatherSlice = weatherSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query({
      async queryFn() {},
      providesTags: ["Weather"],
    }),
  }),
});

export const { useGetWeatherQuery } = apiSlice;
