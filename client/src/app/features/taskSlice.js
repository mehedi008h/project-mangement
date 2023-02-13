import {createSlice} from "@reduxjs/toolkit";
import {createTask, getProjectTask, getTaskDetails, getUserTask, updateTaskStatus} from "../service/taskService";


const taskSlice = createSlice({
    name: "task",
    initialState: {
        task: {},
        tasks: [],
        loading: false,
        success: false,
        error: null,
    },

    reducers: {
        reset: (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.task = action.payload;
            })
            .addCase(createTask.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.task = null;
                state.error = action.payload;
            })
            .addCase(getProjectTask.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProjectTask.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.tasks = action.payload;
            })
            .addCase(getProjectTask.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.tasks = null;
                state.error = action.payload;
            })
            .addCase(getTaskDetails.pending, (state, action) => {
                state.loading = false;
            })
            .addCase(getTaskDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.task = action.payload;
            })
            .addCase(getTaskDetails.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.task = null;
                state.error = action.payload;
            })
            .addCase(getUserTask.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUserTask.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.tasks = action.payload;
            })
            .addCase(getUserTask.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.tasks = null;
                state.error = action.payload;
            })
            .addCase(updateTaskStatus.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateTaskStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.task = action.payload;
            })
            .addCase(updateTaskStatus.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.task = null;
                state.error = action.payload;
            })

    },
});

export const {reset} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
