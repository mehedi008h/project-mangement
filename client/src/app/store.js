import { configureStore } from "@reduxjs/toolkit";
import projectServices from "./service/projectService";

export const store = configureStore({
    reducer: {
        [projectServices.reducerPath]: projectServices.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([projectServices.middleware]),
});
