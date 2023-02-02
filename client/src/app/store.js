import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { projectReducer } from "./features/projectSlice";

export const store = configureStore({
    reducer: {
        project: projectReducer,
        auth: authReducer,
    },
});
