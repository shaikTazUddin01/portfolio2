import { baseApi } from "../Api/baseApi";

const myWorkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createMyWork: builder.mutation({
      query: (data) => ({
        url: "/myWork/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["myWork"]
    }),
    getMyWork: builder.query({
      query: () => ({
        url: "/myWork",
        method: "GET",
      }),
      providesTags:["myWork"]
    }),
    getSpecificWork: builder.query({
      query: (id) => ({
        url: `/myWork/${id}`,
        method: "GET",
      }),
      providesTags:['myWork']
    }),
    DeleteMyWork: builder.mutation({
      query: (id) => ({
        url: `/myWork/delete/${id}`,
        method: "DELETE",
        
      }),
      invalidatesTags:["myWork"]
    }),
    updateMyWork: builder.mutation({
      query: ({id,data}) => ({
        url: `/myWork/update/${id}`,
        method: "PATCH",
        body:data
      }),
      invalidatesTags:["myWork"]
    }),
  }),
});

export const {useCreateMyWorkMutation,useGetMyWorkQuery,useGetSpecificWorkQuery,useDeleteMyWorkMutation,useUpdateMyWorkMutation}=myWorkApi