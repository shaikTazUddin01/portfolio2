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
    getMyWork: builder.query({
      query: () => ({
        url: "/myWork",
        method: "GET",
      
      }),
    }),
    getSpecificWork: builder.query({
      query: (id) => ({
        url: `/myWork/${id}`,
        method: "GET",
        
      }),
    }),
    DeleteMyWork: builder.mutation({
      query: (id) => ({
        url: `/myWork/delete/${id}`,
        method: "DELETE",
        
      }),
    }),
    updateMyWork: builder.mutation({
      query: ({id,data}) => ({
        url: `/myWork/update/${id}`,
        method: "PATCH",
        body:data
        
      }),
    }),
  }),
});

export const {useCreateMyWorkMutation,useGetMyWorkQuery,useGetSpecificWorkQuery,useDeleteMyWorkMutation,useUpdateMyWorkMutation}=myWorkApi