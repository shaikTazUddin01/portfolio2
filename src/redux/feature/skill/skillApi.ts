import { baseApi } from "../Api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createskill: builder.mutation({
      query: (data) => ({
        url: "/skill/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skill"],
    }),
    getskill: builder.query({
      query: () => ({
        url: "/skill/",
        method: "GET",
      }),
      providesTags: ["skill"],
    }),
    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skill/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skill"],
    }),
    updateSkill: builder.mutation({
      query: ({ id, data }) => ({
        url: `/skill/update/${id}`,
        method: "PATCH",
        body:  data ,
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const {
  useCreateskillMutation,
  useGetskillQuery,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
} = skillApi;
