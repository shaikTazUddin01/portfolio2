import { baseApi } from "../Api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/create",
        method: "POST",
        body: data,
      }),
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blog/",
        method: "GET",
    
      }),
    }),
    getSpecificBlog: builder.query({
      query: ({id}) => ({
        url: `/blog/${id}`,
        method: "GET",
    
      }),
    }),
 
    
  }),
});

export const {useCreateBlogMutation,useGetBlogQuery,useGetSpecificBlogQuery}=blogApi