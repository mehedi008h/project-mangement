import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./features/authSlice";
import {projectReducer} from "./features/projectSlice";
import {taskReducer} from "./features/taskSlice";

export const store = configureStore({
    reducer: {
        project: projectReducer,
        auth: authReducer,
        task: taskReducer,
    },
});
