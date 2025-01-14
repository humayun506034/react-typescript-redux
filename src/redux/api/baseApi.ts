import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["task"],
  endpoints: (builders) => ({
    getTasks: builders.query({
      query: () => "/tasks",
      providesTags: ["task"],
    }),
    createTask: builders.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = baseApi;
