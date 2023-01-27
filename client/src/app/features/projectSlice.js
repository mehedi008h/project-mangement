import { createSlice } from "@reduxjs/toolkit";
import { createProject, getProject } from "../service/projectService";

const projectSlice = createSlice({
    name: "project",
    initialState: {
        project: [],
        projects: [],
        loading: false,
        success: false,
        error: null,
    },

    reducers: {
        reset: (state, action) => {
            state.project = null;
            state.projects = null;
            state.loading = false;
            state.success = false;
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProject.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.project = action.payload;
            })
            .addCase(createProject.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.project = null;
                state.error = action.payload;
            })
            .addCase(getProject.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProject.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.projects = action.payload;
            })
            .addCase(getProject.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.projects = null;
                state.error = action.payload;
            });
    },
});

export const { reset } = projectSlice.actions;

export const projectReducer = projectSlice.reducer;
