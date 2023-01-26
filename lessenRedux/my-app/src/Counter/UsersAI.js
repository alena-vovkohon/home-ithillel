import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const UsersAI = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  endpoints: (builder) => ({
    getUsres: builder.query({
      query: () => "",
    }),
    getUsersById: builder.query({
      query: (id) => {
        console.log("id", id);
        return id + "/";
      },
    }),

    patchUserById: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `${id}/`,
        method: "PATCH",
        body: patch,
      }),
    }),
    deleteUserById: builder.mutation({
      query: (args) => {
        console.log("deleteUserById", args.id);
        return {
          url: `${args.id}/`,
          method: "DELETE",
        };
      },
      // invalidatesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
  }),
});

// console.log("UsersAI", UsersAI);

export const {
  useGetUsresQuery,
  useGetUsersByIdQuery,
  useLazyGetUsersByIdQuery,
  useDeleteUserByIdMutation,
  usePatchUserByIdMutation,
} = UsersAI;
