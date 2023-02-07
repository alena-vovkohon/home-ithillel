import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UsersAI = createApi({
  reducerPath: "users",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsres: builder.query({
      query: () => "users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "User", id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),
    addUser: builder.mutation({
      query(body) {
        console.log("addUser", body);
        return {
          url: `users`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        console.log("deleteUser", id);
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const { useGetUsresQuery, useAddUserMutation, useDeleteUserMutation } =
  UsersAI;
