import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petTagAPI = createApi({
  reducerPath: 'petTagAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  tagTypes: ['PetTag'],
  endpoints: (builder) => ({
    getPetTagFromAPI: builder.query({
      query: () => '/petTag',
      providesTags: ['PetTag'],
    }),
    setPetTagFromAPI: builder.mutation({
      query: ({ body }) => ({
        url: '/petTag',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['PetTag'],
    }),
  }),
});

export const { useGetPetTagFromAPIQuery, useSetPetTagFromAPIMutation } = petTagAPI;
