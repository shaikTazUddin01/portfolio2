import { baseApi } from "../Api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createskill: builder.mutation({
      query: (data) => ({
        url: "/skill/create",
        method: "POST",
        body: data,
      }),
    }),
    getskill: builder.query({
      query: () => ({
        url: "/skill/",
        method: "GET",
    
      }),
    }),
   
 
    
  }),
});

export const {useCreateskillMutation,useGetskillQuery}=skillApi