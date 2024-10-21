import { baseApi } from "../Api/baseApi";

const myWorkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMyWork: builder.mutation({
      query: (data) => ({
        url: "/myWork/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useCreateMyWorkMutation}=myWorkApi