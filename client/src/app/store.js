import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./features/projectSlice";

export const store = configureStore({
    reducer: {
        project: projectReducer,
    },
});
