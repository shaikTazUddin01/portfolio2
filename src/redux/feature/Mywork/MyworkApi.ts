import { baseApi } from "../Api/baseApi";

const myWorkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMyWork: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useCreateMyWorkMutation}=myWorkApi