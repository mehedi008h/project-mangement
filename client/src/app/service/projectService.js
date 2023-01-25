import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const projectServices = createApi({
    reducerPath: "projects",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://",
    }),
    tagTypes: ["projects"],
    endpoints: (builder) => ({
        allProjects: builder.query({
            query: () => ({
                url: `porject`,
                method: "GET",
            }),
            providesTags: ["projects"],
        }),
    }),
});

export const { useAllProjectsQuery } = projectServices;
export default projectServices;
