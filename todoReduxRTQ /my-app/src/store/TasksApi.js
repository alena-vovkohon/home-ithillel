import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../constants/constants";

export const TasksApi = createApi({
  reducerPath: "tasks",
  tagTypes: ["Task"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "todos/?_limit=10",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Task", id })),
              { type: "Task", id: "LIST" },
            ]
          : [{ type: "Task", id: "LIST" }],
    }),
    addTask: builder.mutation({
      query(body) {
        return {
          url: `todos`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
    updateTask: builder.mutation({
      query({ id, ...patch }) {
        console.log(id, patch);
        return {
          url: `todos/${id}`,
          method: "PATCH",
          body: patch,
        };
      },
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
    deleteTask: builder.mutation({
      query: (id) => {
        return {
          url: `todos/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = TasksApi;
