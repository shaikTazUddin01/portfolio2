import { baseApi } from "../Api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blog/",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    getSpecificBlog: builder.query({
      query: ({ id }) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, data }) => {
        // console.log(id, data); 
        return {
          url: `/blog/update/${id}`,
          method: "PATCH", 
          body: data,
        };
      },
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogQuery,
  useGetSpecificBlogQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
} = blogApi;
